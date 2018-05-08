<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
	import echarts from 'echarts'
	require('echarts/theme/macarons') // echarts theme
	import {
		debounce
	} from '@/utils'

	export default {
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			width: {
				type: String,
				default: '100%'
			},
			height: {
				type: String,
				default: '300px'
			}
		},
		data() {
			return {
				chart: null
			}
		},
		mounted() {
			this.initChart()
			this.__resizeHanlder = debounce(() => {
				if (this.chart) {
					this.chart.resize()
				}
			}, 100)
			window.addEventListener('resize', this.__resizeHanlder)
		},
		beforeDestroy() {
			if (!this.chart) {
				return
			}
			window.removeEventListener('resize', this.__resizeHanlder)
			this.chart.dispose()
			this.chart = null
		},
		methods: {
			initChart() {
				this.chart = echarts.init(this.$el, 'macarons')
				this.chart.setOption({
					backgroundColor: '#2D2D2D',
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						x: 'center',
						y: 'bottom',
						textStyle:{
							color:'#fff',
							width:'100px',
							height:'50px',
							
						padding:5,
						},
						data: ['Mercado Livre', 'B2W', 'Walmart', 'Netshoes']
					},
					toolbox: {
						show: true,
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['pie', 'funnel']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					calculable: true,
					series: [		{
							name: 'LUCRO',
							type: 'pie',
							radius: ['50%', '70%'],
							avoidLabelOverlap: false,
							label: {
								normal: {
									show: false,
									position: 'center'
								},
								emphasis: {
									show: true,
									textStyle: {
										fontSize: '30',
										fontWeight: 'bold'
									}
								}
							},
							lableLine: {
								normal: {
									show: true
								},
								emphasis: {
									show: true
								}
							},
							type: 'pie',
							radius: [80, 110],
							center: ['30%', '50%'],
							data: [{
									value: 10,
									name: 'Mercado Livre',
									itemStyle: {
										color: '#FFE700'
									}
								},
								{
									value: 5,
									name: 'B2W',
									itemStyle: {
										color: '#06EAC3'
									}
								},
								{
									value: 15,
									name: 'Walmart',
									itemStyle: {
										color: '#128AC6'
									}
								},
								{
									value: 25,
									name: 'Netshoes',
									itemStyle: {
										color: '#775683'
									}
								},
							]
						},
						{
							name: 'FATURAMENTO',
							type: 'pie',
							radius: ['50%', '70%'],
							avoidLabelOverlap: false,
							label: {
								normal: {
									show: false,
									position: 'center'
								},
								emphasis: {
									show: true,
									textStyle: {
										fontSize: '30',
										fontWeight: 'bold'
									}
								}
							},
							lableLine: {
								normal: {
									show: true
								},
								emphasis: {
									show: true
								}
							},
							type: 'pie',
							radius: [80, 110],
							center: ['70%', '50%'],
							data: [{
									value: 10,
									name: 'Mercado Livre',
									itemStyle: {
										color: '#FFE700'
									}
								},
								{
									value: 5,
									name: 'B2W',
									itemStyle: {
										color: '#06EAC3'
									}
								},
								{
									value: 15,
									name: 'Walmart',
									itemStyle: {
										color: '#128AC6'
									}
								},
								{
									value: 25,
									name: 'Netshoes',
									itemStyle: {
										color: '#775683'
									}
								},
							]
						}
					]
				})
			}
		}
	}

</script>
