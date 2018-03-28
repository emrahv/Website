myApp.service('organiser', function()
{   	
	this.productTree = 
	[
		{id:1,name:1,image:[{id:1}],imageCarousel:false,interested:[{id:201},{id:202},{id:3}],childrenLocation:"body",
			children:
			[
				{id:101,name:101,image:[{id:5},{id:1},{id:7}],width:{lg:4,md:4,xs:12},childrenLocation:"header",dataSection:{header:[{id:1}],body:[{id:2},{id:3},{id:4},{id:7},{id:8}]},
					children:
					[
						{id:10101,name:10101,image:[{id:1},{id:2},{id:3},{id:4}],width:{lg:6,md:6,xs:12},
						dataSection:{header:[{id:5}],body:[{id:3}]},interested:[{id:102},{id:103},{id:30201}]},
						{id:10102,name:10102,image:[{id:5},{id:6},{id:7}],width:{lg:6,md:6,xs:12},
						dataSection:{header:[{id:6}],body:[{id:3}]},interested:[{id:102},{id:103},{id:30201}]}
					],
					interested:[{id:102},{id:103},{id:201}]
				},
				{id:102,name:102,image:[{id:7}],width:{lg:4,md:4,xs:12},childrenLocation:"header",dataSection:{header:[{id:13}],body:[{id:14}]},
					children:
					[
						{id:10201,name:10202,image:[{id:7},{id:8},{id:9}],
							dataSection:{header:[{id:15}]},width:{lg:6,md:6,xs:12},interested:[{id:10202},{id:10301},{id:20101}]},
						{id:10202,name:10201,image:[{id:13},{id:14}],width:{lg:6,md:6,xs:12},
							dataSection:{header:[{id:16}]},interested:[{id:10201},{id:10301},{id:20101}]}
					],
					interested:[{id:101},{id:103},{id:201}]
				},
				{id:103,name:103,image:[{id:17}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:18}],body:[{id:19}]},childrenLocation:"header",
					children:
					[
						{id:10301,name:10301,image:[{id:17},{id:18}],dataSection:{header:[{id:20}]},width:{lg:6,md:6,xs:12},interested:[{id:101},{id:20101},{id:30201}]},
						{id:10302,name:10302,image:[{id:15},{id:16}],dataSection:{header:[{id:21}]},width:{lg:6,md:6,xs:12},interested:[{id:101},{id:20102},{id:30203}]}
					],
					interested:[{id:101},{id:102},{id:201}]
				}
			]
		},
		{id:2,name:2,image:[{id:26}],imageCarousel:false,interested:[{id:101},{id:102},{id:3}],childrenLocation:"body",
			children:
			[
				{id:201,name:201,image:[{id:26}],width:{lg:4,md:6,xs:12},childrenLocation:"body",imageCarousel:false,interested:[{id:101},{id:202},{id:30101}],
					children:
					[
						{id:20101,name:20101,image:[{id:19}],imageCarousel:false, dataSection:{},interested:[{id:101},{id:202},{id:302}],
							models:
							[
								{id:2010101,name:2010101,image:[{id:19}],dataSection:{header:[{id:24},{id:25},{id:26}]},width:{lg:6,md:6,xs:12}},
								{id:2010102,name:2010102,image:[{id:20}],dataSection:{header:[{id:27},{id:28},{id:29}]},width:{lg:6,md:6,xs:12}}
							]
						},
						{id:20102,name:20102,image:[{id:21},{id:22}],dataSection:{header:[{id:30},{id:31},{id:32}]},interested:[{id:101},{id:202},{id:301}]},
						
						{id:20103,name:20103,image:[{id:23}],imageCarousel:false,interested:[{id:101},{id:202},{id:302}],
							models:
							[
								{id:2010301,name:2010301,image:[{id:23},{id:24}],dataSection:{header:[{id:33},{id:34},{id:35}]},width:{lg:6,md:6,xs:12}},
								{id:2010302,name:2010302,image:[{id:25}],dataSection:{header:[{id:36},{id:37},{id:38}]},width:{lg:6,md:6,xs:12}}
							]
						},
						{id:20104,name:20104,image:[{id:26}],imageCarousel:false,interested:[{id:101},{id:202},{id:302}],
							models:
							[
								{id:2010401,name:2010401,image:[{id:26}],dataSection:{header:[{id:39},{id:40},{id:41}]},width:{lg:4,md:4,xs:12}},
								{id:2010402,name:2010402,image:[{id:27}],dataSection:{header:[{id:42},{id:43},{id:44}]},width:{lg:4,md:4,xs:12}},
								{id:2010403,name:2010403,image:[{id:28}],dataSection:{header:[{id:45}]},width:{lg:4,md:4,xs:12}}
							]
						},
						{id:20105,name:20105,image:[{id:29}],dataSection:{header:[{id:46},{id:47}],body:[{id:48}]},interested:[{id:101},{id:202},{id:302}]},
						
						{id:20106,name:20106,image:[{id:30}],dataSection:{header:[{id:49}]},interested:[{id:101},{id:202},{id:302}]},
						
						{id:20107,name:20107,image:[{id:31},{id:32}],dataSection:{header:[{id:50},{id:51}],body:[{id:52}]},interested:[{id:101},{id:202},{id:302}]},
						
						{id:20108,name:20108,image:[{id:33}],dataSection:{header:[{id:53}]},interested:[{id:101},{id:202},{id:302}]},
						
						{id:20109,name:20109,image:[{id:34}],dataSection:{header:[{id:54},{id:55}],body:[{id:56}]},interested:[{id:101},{id:202},{id:302}]},
						
						{id:20110,name:20110,image:[{id:35}],dataSection:{header:[{id:57},{id:58}],body:[{id:59}]},interested:[{id:101},{id:202},{id:302}]},
						
						{id:20111,name:20111,image:[{id:36}],imageCarousel:false,interested:[{id:101},{id:202},{id:302}],
							models:
							[
								{id:2011101,name:2011101,image:[{id:36}],dataSection:{header:[{id:60},{id:61},{id:62}]},width:{lg:6,md:6,xs:12}},
								{id:2011102,name:2011102,image:[{id:37}],dataSection:{header:[{id:63},{id:64},{id:65}]},width:{lg:6,md:6,xs:12}}
							]
						}
					]
				},	
				{id:202,name:202,image:[{id:42},{id:44}],width:{lg:4,md:6,xs:12},dataSection:{},childrenLocation:"body",imageCarousel:false,interested:[{id:101},{id:201},{id:301}],
					children:
					[
						{id:20201,name:20201,image:[{id:40}],imageCarousel:false,dataSection:{body:[{id:66}]},interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:2020101,name:2020101,image:[{id:38}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:67}]}},
								{id:2020102,name:2020102,image:[{id:39}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:68}]}}
							]
						},
						{id:20202,name:20202,image:[{id:41}],imageCarousel:false,dataSection:{body:[{id:69}]},interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:2020201,name:2020101,image:[{id:40}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:70}]}},
								{id:2020202,name:2020102,image:[{id:41}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:71}]}}
							]
						},
						{id:20203,name:20203,image:[{id:42}],imageCarousel:false,interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:2020301,name:2020101,image:[{id:42}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:72}]}},
								{id:2020302,name:2020102,image:[{id:43}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:73}]}}
							]
						},
						{id:20204,name:20204,image:[{id:44}],imageCarousel:false,dataSection:{body:[{id:74}]},interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:2020401,name:2020401,image:[{id:44}],width:{lg:6,md:6,xs:12}},
								{id:2020402,name:2020402,image:[{id:45}],width:{lg:6,md:6,xs:12}}
							]
						},
						{id:20205,name:20205,image:[{id:46}],dataSection:{header:[{id:75},{id:76}]},interested:[{id:10101},{id:20101},{id:30101}]},
						
						{id:20206,name:20206,image:[{id:47}],imageCarousel:false,dataSection:{body:[{id:77},{id:78}]},interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:2020601,name:2020601,image:[{id:47}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:79}]}},
								{id:2020602,name:2020602,image:[{id:48}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:80}]}}
							]
						}
					]
				}
			]
		},
		{id:3,name:3,image:[{id:50},{id:52},{id:80},{id:108}],interested:[{id:1},{id:201},{id:202}],childrenLocation:"body",imageCarousel:false,
			children:
			[
				{id:301,name:301,image:[{id:49},{id:54},{id:80}],width:{lg:4,md:6,xs:12},childrenLocation:"header",dataSection:{header:[{id:81}]},interested:[{id:101},{id:201},{id:301}],
					children:
					[
						{id:30101,name:30101,image:[{id:50}],imageCarousel:false,childrenLocation:"body",interested:[{id:10101},{id:20101},{id:30101}],
							children:
							[
								{id:3010101,name:3010101,image:[{id:49}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:82}],body:[{id:83},{id:84},{id:85},{id:86}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010102,name:3010102,image:[{id:50}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:83}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010103,name:3010103,image:[{id:51}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:83}]},interested:[{id:10101},{id:20101},{id:30101}]}
							]
						},
						{id:30102,name:30102,image:[{id:52}],imageCarousel:false,childrenLocation:"body",interested:[{id:10101},{id:20101},{id:30101}],
							children:
							[
								{id:3010201,name:3010201,image:[{id:52},{id:53}],dataSection:{header:[{id:87}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010202,name:3010202,image:[{id:54},{id:55}],dataSection:{header:[{id:88}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010203,name:3010203,image:[{id:56},{id:57}],dataSection:{header:[{id:89}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010204,name:3010204,image:[{id:58},{id:59}],dataSection:{header:[{id:90}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010205,name:3010205,image:[{id:60},{id:61}],dataSection:{header:[{id:91}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010206,name:3010206,image:[{id:62},{id:63}],dataSection:{header:[{id:92}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010207,name:3010207,image:[{id:64},{id:65}],dataSection:{header:[{id:93}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010208,name:3010208,image:[{id:66},{id:67}],dataSection:{header:[{id:94}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010209,name:3010209,image:[{id:68},{id:69},{id:70},{id:71}],dataSection:{header:[{id:95}]},interested:[{id:10101},{id:20101},{id:30101}]}
							]
						},
						{id:30103,name:30103,image:[{id:72}],imageCarousel:false,childrenLocation:"body" ,dataSection:{body:[{id:108},{id:109}]},interested:[{id:10101},{id:20101},{id:30101}],
							children:
							[
								{id:3010301,name:3010301,image:[{id:72},{id:74},{id:73}],dataSection:{header:[{id:96}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010302,name:3010302,image:[{id:75},{id:77},{id:76}],dataSection:{header:[{id:97}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010303,name:3010303,image:[{id:78},{id:79}],dataSection:{header:[{id:98}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010304,name:3010304,image:[{id:80},{id:81}],dataSection:{header:[{id:99}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010305,name:3010305,image:[{id:82},{id:83}],dataSection:{header:[{id:100}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010306,name:3010306,image:[{id:84},{id:85}],dataSection:{header:[{id:101}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010307,name:3010307,image:[{id:86},{id:87}],dataSection:{header:[{id:102}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010308,name:3010308,image:[{id:88},{id:89}],dataSection:{header:[{id:103}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010309,name:3010309,image:[{id:90},{id:91},{id:92}],dataSection:{header:[{id:104}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010310,name:3010310,image:[{id:93},{id:94}],dataSection:{header:[{id:105}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010311,name:3010311,image:[{id:95},{id:96}],dataSection:{header:[{id:106}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3010312,name:3010312,image:[{id:97},{id:98}],dataSection:{header:[{id:107}]},interested:[{id:10101},{id:20101},{id:30101}]}
							]
						}
					]
				},
				{id:302,name:302,image:[{id:110}],width:{lg:4,md:6,xs:12},childrenLocation:"body",imageCarousel:false,interested:[{id:10101},{id:20101},{id:301}],
					children:
					[
						{id:30201,name:30201,image:[{id:99}],imageCarousel:false,interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:3020101,name:3020101,image:[{id:99},{id:100}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:111},{id:112}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3020102,name:3020102,image:[{id:101},{id:102}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:113},{id:112}]},interested:[{id:10101},{id:20101},{id:30101}]},
								{id:3020103,name:3020103,image:[{id:103},{id:104}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:114},{id:115}]},interested:[{id:10101},{id:20101},{id:30101}]}
							]
						},
						{id:30202,name:30202,image:[{id:105},{id:106},{id:107}],dataSection:{header:[{id:116},{id:117},{id:118}]},interested:[{id:10101},{id:20101},{id:30101}]},
						{id:30203,name:30203,image:[{id:108}],imageCarousel:false,interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:3020301,name:3020301,image:[{id:108},{id:109}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:119},{id:120},{id:121}]}},
								{id:3020302,name:3020302,image:[{id:110}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:122},{id:123},{id:124}]}},
								{id:3020303,name:3020303,image:[{id:111}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:125},{id:126},{id:127}]}}
							]
						},
						{id:30204,name:30204,image:[{id:112}],dataSection:{header:[{id:128},{id:129}]},interested:[{id:10101},{id:20101},{id:30101}]},
						{id:30205,name:30205,image:[{id:113}],imageCarousel:false,interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:3020501,name:3020501,image:[{id:113},{id:114},{id:115}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:130},{id:131},{id:132}]}},
								{id:3020502,name:3020502,image:[{id:116},{id:117},{id:118}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:130},{id:131},{id:132}]}}
							]
						},
						{id:30206,name:30206,image:[{id:119}],imageCarousel:false,interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:3020601,name:3020601,image:[{id:119},{id:120},{id:121}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:133},{id:134}]}},
								{id:3020602,name:3020602,image:[{id:122},{id:123},{id:124}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:135},{id:136}]}},
								{id:3020603,name:3020603,image:[{id:125},{id:126},{id:127},{id:128}],width:{lg:4,md:4,xs:12},dataSection:{header:[{id:137},{id:138}]}}
							]
						},
						{id:30207,name:30207,image:[{id:129}],imageCarousel:false,interested:[{id:10101},{id:20101},{id:30101}],
							models:
							[
								{id:3020701,name:3020701,image:[{id:129},{id:130}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:139},{id:140}]}},
								{id:3020702,name:3020702,image:[{id:131}],width:{lg:6,md:6,xs:12},dataSection:{header:[{id:141},{id:142}]}}
							]
						}
					]
				}
			]
		}
	];
	
	this.dataSection = 
	[
		{
			id:1,
			title:"",
			detail:
			[
				{text:9000}
			]
		},
		{
			id:2,
			title:"",
			detail:
			[
				{text:9001},
				{text:9002},
				{text:9003},
				{text:9004}
			]
		},
		{
			id:3,
			subSection:[{id:"3A",width:{lg:7,md:7,xs:12}},{id:"3B",width:{lg:5,md:5,xs:12}}]
		},
		{
			id:"3A",
			title:9005,
			detail:
			[
				{list:
					[
						{text:9006},
						{text:9007},
						{text:9008},
						{text:9009},
						{text:9010},
						{text:9011},
						{text:9012}
					]
				}
			]
		},
		{
			id:"3B",
			title:9013,
			detail:
			[
				{list:
					[
						{text:9014},
						{text:9015},
						{text:9016},
						{text:9017},
						{text:9018},
						{text:9019},
						{text:9020},
						{text:9021},
						{text:9022},
						{text:9023}
					]
				}
			]
		},
		{
			id:5,
			detail:
			[
				{text:9024}
			]
		},
		{
			id:6,
			detail:
			[
				{text:9025}
			]
		},
		{
			id:7,
			title:9026,
			subSection:[{id:"7A",width:{lg:4,md:4,xs:12}},{id:"7B",width:{lg:4,md:4,xs:12}},{id:"7C",width:{lg:4,md:4,xs:12}}]
		},
		{
			id:"7A",
			title:9028,
			detail:
			[
				{text:9029},
				{text:9030},
				{text:9031},
				{text:9032}
			]
			
		},
		{
			id:"7B",
			title:9033,
			detail:
			[
				{text:9034},
				{text:9035}
			]
		},
		{
			id:"7C",
			title:9036,
			detail:
			[
				{text:9037},
				{text:9038}
			]
		},
		{
			id:8,
			title:9039,
			detail:
			[
				{text:9040},
				{text:9041}
			],
			subSection:[{id:"8A"},{id:"8B"}]
		},
		{
			id:"8A",
			title:9042,
			detail:
			[
				{text:9043},
				{text:9044}
			]
		},
		{
			id:"8B",
			title:9045,
			detail:
			[
				{text:9046},
				{list:
					[
						{text:9047},
						{text:9048},
						{text:9049},
						{text:9050},
						{text:9051},
						{text:9052}
					]
				},
				{text:9053}
			]
		},
		{
			id:9,
			title:9054,
			detail:
			[
				{text:9055},
				{text:9056},
				{text:9057},
				{list:
					[
						{text:9058},
						{text:9059},
						{text:9060},
						{text:9061},
						{text:9062},
						{text:9063},
						{text:9064},
						{text:9065}
					]
				},
				{text:9066},
				{text:9067},
				{text:9068}
			]
		},
		{
			id:10,
			title:9069,
			subSection:[{id:"10A"},{id:"10B"},{id:"10C"},{id:"10D"},{id:"10E"}]
		},
		{
			id:"10A",
			title:9070,
			detail:
			[
				{text:9071},
				{text:9072},
				{list:
					[
						{text:9073},
						{text:9074},
						{text:9075}
					]
				},
				{text:9076}
			]
		},
		{
			id:"10B",
			title:9077,
			detail:
			[
				{text:9078}
			]
		},
		{
			id:"10C",
			title:9079,
			detail:
			[
				{text:9080},
				{text:9081},
				{text:9082},
				{text:9083}
			]
		},
		{
			id:"10D",
			title:9084,
			detail:
			[
				{text:9085}
			]
		},
		{
			id:"10E",
			title:9086,
			image:[{id:1},{id:2},{id:3},{id:4}],
			detail:
			[
				{text:9087},
				{list:
					[
						{head:9088,text:9089},
						{head:9090,text:9091},
						{head:9092,text:9093},
						{head:9094,text:9095},
						{head:9096,text:9097},
						{head:9098,text:9099},
						{head:9100,text:9101},
						{head:9102,text:9103}
					]
				},
				{text:9104}
			]
		},
		{
			id:11,
			title:9105,
			detail:
			[
				{text:9106},
				{text:9107},
				{text:9108},
				{text:9109},
				{text:9110}
			]
		},
		{
			id:12,
			title:9112,
			detail:
			[
				{text:9113},
				{text:9114},
				{text:9115},
			]
		},
		{
			id:13,
			detail:
			[
				{text:9118},
				{text:9119}
			]
		},
		{
			id:14,
			detail:
			[
				{list:
					[
						{text:9120},
						{text:9121},
						{text:9122},
						{text:9123},
						{text:9124},
						{text:9125}
					]
				}
			]
		},
		{
			id:15,
			detail:
			[
				{text:9126}
			]
		},
		{
			id:16,
			detail:
			[
				{text:9127}
			]
		},
		{
			id:17,
			title:9069,
			subSection:[{id:"17A"},{id:"17B"},{id:"17C"}]
		},
		{
			id:"17A",
			title:9128,
			detail:
			[
				{text:9129},
				{text:9130}
			]
		},
		{
			id:"17B",
			title:9077,
			detail:
			[
				{text:9131}
			]
		},
		{
			id:"17C",
			title:9132,
			image:[{id:10},{id:11},{id:12}],
			detail:
			[
				{text:9133}
			]
		},
		{
			id:18,
			detail:
			[
				{text:9134},
			]
		},
		{
			id:19,
			detail:
			[
				{text:9135},
				{text:9136}
			]
		},
		{
			id:20,
			detail:
			[
				{text:9137},
				{text:9138}
			]
		},
		{
			id:21,
			detail:
			[
				{text:9139},
				{text:9140}
			]
		},
		{
			id:22,
			detail:
			[
				{text:9141}
			]
		},
		{
			id:23,
			detail:
			[
				{text:9142}
			]
		},
		{
			id:24,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9144},
						{text:9145},
						{text:9146},
						{text:9147},
						{text:9148},
						{text:9149},
						{text:9150}
					]
				}
			]
		},
		{
			id:25,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9151},
						{text:9152},
						{text:9153},
						{text:9154},
						{text:9155},
						{text:9156},
						{text:9157},
						{text:9158}
					]
				}
			]
		},
		{
			id:26,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"1400",unit:9166},
							{name:9161,value:"100",unit:9167},
							{name:9162,value:"-10/110",unit:9168},
							{name:9163,value:"3600",unit:9169},
							{name:9164,value:"200",unit:9170},
							{name:9165,value:"10",unit:9171}
						]
					}
				},
				{text:9172}
			]
		},
		{
			id:27,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9173},
						{text:9174},
						{text:9175},
						{text:9176},
						{text:9177},
						{text:9178},
						{text:9179}
					]
				}
			]
		},
		{
			id:28,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9154},
						{text:9156},
						{text:9152},
						{text:9155},
						{text:9158}
					]
				}
			]
		},
		{
			id:29,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"1400",unit:9166},
							{name:9161,value:"100",unit:9167},
							{name:9162,value:"-10/110",unit:9168},
							{name:9163,value:"3600",unit:9169},
							{name:9164,value:"55",unit:9170}
						]
					}
				}
			]
		},
		{
			id:30,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9180},
						{text:9181},
						{text:9182},
						{text:9183},
						{text:9184},
						{text:9185},
						{text:9186},
						{text:9187},
						{text:9188},
						{text:9189},
						{text:9190},
						{text:9191}
					]
				}
			]
		},
		{
			id:31,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9192},
						{text:9193},
						{text:9194},
						{text:9195},
						{text:9196}
					]
				}
			]
		},
		{
			id:32,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"500",unit:9166},
							{name:9161,value:"100",unit:9167},
							{name:9162,value:"0/60",unit:9168},
							{name:9163,value:"3500",unit:9169},
							{name:9164,value:"55",unit:9170}
						]
					}
				}
			]
		},
		{
			id:33,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9197},
						{text:9198},
						{text:9199},
						{text:9200},
						{text:9201},
						{text:9202},
						{text:9203},
						{text:9204}
					]
				}
			]
		},
		{
			id:34,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9205},
						{text:9206},
						{text:9207},
						{text:9208},
						{text:9209}
					]
				}
			]
		},
		{
			id:35,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"270",unit:9166},
							{name:9161,value:"160",unit:9167},
							{name:9162,value:"-10/110",unit:9168},
							{name:9163,value:"3600",unit:9169},
							{name:9164,value:"250",unit:9170}
						]
					}
				}
			]
		},
		{
			id:36,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9210},
						{text:9211},
						{text:9212},
						{text:9213},
						{text:9214},
						{text:9215},
						{text:9216},
						{text:9217},
						{text:9218}
					]
				}
			]
		},
		{
			id:37,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9205},
						{text:9206},
						{text:9219},
						{text:9196},
						{text:9220},
						{text:9221},
						{text:9222},
					]
				}
			]
		},
		{
			id:38,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"450",unit:9166},
							{name:9161,value:"420",unit:9167},
							{name:9162,value:"-10/110",unit:9168},
							{name:9163,value:"3600",unit:9169},
							{name:9164,value:"250",unit:9170}
						]
					}
				}
			]
		},
		{
			id:39,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9223},
						{text:9224},
						{text:9225},
						{text:9226},
						{text:9227},
						{text:9228},
						{text:9229},
						{text:9230},
						{text:9231},
						{text:9232},
						{text:9233},
						{text:9234},
						{text:9235},
						{text:9236},
						{text:9237}
					]
				}
			]
		},
		{
			id:40,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9205},
						{text:9206},
						{text:9207},
						{text:9208}
					]
				}
			]
		},
		{
			id:41,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"180",unit:9166},
							{name:9161,value:"160",unit:9167},
							{name:9162,value:"0/60",unit:9168}
						]
					}
				}
			]
		},
		{
			id:42,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9238},
						{text:9239},
						{text:9240},
						{text:9241},
						{text:9242},
						{text:9243},
						{text:9244},
						{text:9245},
						{text:9246},
						{text:9247},
						{text:9248},
						{text:9249},
						{text:9250},
						{text:9251}
					]
				}
			]
		},
		{
			id:43,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9205},
						{text:9206},
						{text:9207},
						{text:9208},
						{text:9209},
						{text:9252},
						{text:9253},
					]
				}
			]
		},
		{
			id:44,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"180",unit:9166},
							{name:9161,value:"160",unit:9167},
							{name:9162,value:"0/60",unit:9168},
							{name:9163,value:"3600",unit:9169},
							{name:9164,value:"18.5",unit:9170}
						]
					}
				}
			]
		},
		{
			id:45,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9254},
						{text:9255},
						{text:9256},
						{text:9257},
						{text:9258},
						{text:9259},
						{text:9260},
						{text:9261},
						{text:9262},
						{text:9263},
						{text:9264},
						{text:9265},
						{text:9266},
						{text:9267},
						{text:9268}
					]
				}
			]
		},
		{
			id:46,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9269},
						{text:9270},
						{text:9271},
						{text:9272},
						{text:9273},
						{text:9274},
						{text:9275},
						{text:9276},
						{text:9277},
						{text:9278},
						{text:9279},
						{text:9280},
						{text:9281},
						{text:9282},
						{text:9283},
						{text:9284},
						{text:9285},
						{text:9286}
					]
				}
			]
		},
		{
			id:47,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9208},
						{text:9209},
						{text:9252},
						{text:9253},
						{text:9287},
						{text:9288},
						{text:9289},
					]
				}
			]
		},
		{
			id:48,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"2800",unit:9166},
							{name:9161,value:"420",unit:9167},
							{name:9162,value:"0/60",unit:9168},
							{name:9163,value:"3600",unit:9169}
						]
					}
				}
			]
		},
		{
			id:49,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9290},
						{text:9291},
						{text:9292},
						{text:9293},
						{text:9294},
						{text:9295},
						{text:9296},
						{text:9297}
					]
				}
			]
		},
		{
			id:50,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9298},
						{text:9299},
						{text:9300},
						{text:9301},
						{text:9302},
						{text:9303},
						{text:9304},
						{text:9305},
						{text:9306}
					]
				}
			]
		},
		{
			id:51,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9307},
						{text:9308},
						{text:9309},
						{text:9310},
						{text:9311},
						{text:9312}
					]
				}
			]
		},
		{
			id:52,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"200",unit:9166},
							{name:9161,value:"30",unit:9167},
							{name:9162,value:"0/40",unit:9168},
							{name:9163,value:"2950",unit:9169},
							{name:9164,value:"11",unit:9170}
						]
					}
				}
			]
		},
		{
			id:53,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9313},
						{text:9314},
						{text:9315},
						{text:9316},
						{text:9317},
						{text:9318},
						{text:9319},
						{text:9320},
						{text:9321},
						{text:9322},
						{text:9323},
						{text:9324},
						{text:9325},
						{text:9326},
						{text:9327},
						{text:9328},
						{text:9329}
					]
				}
			]
		},
		{
			id:54,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9330},
						{text:9331},
						{text:9332},
						{text:9333},
						{text:9334},
						{text:9335},
						{text:9336}
					]
				}
			]
		},
		{
			id:55,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9337},
						{text:9338},
						{text:9339},
						{text:9340},
						{text:9341},
						{text:9342},
						{text:9343},
						{text:9344},
						{text:9345},
						{text:9346},
						{text:9347},
						{text:9348}
					]
				}
			]
		},
		{
			id:56,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9349,value:"DN 32 - DN 150",unit:9350},
							{name:9160,value:"450",unit:9166},
							{name:9161,value:"110",unit:9167},
							{name:9162,value:"320",unit:9168},
							{name:9163,value:"1450-2900",unit:9169},
							{name:9165,value:"16",unit:9171}
						]
					}
				}
			]
		},
		{
			id:57,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9351},
						{text:9352},
						{text:9353},
						{text:9354},
						{text:9355},
						{text:9356},
						{text:9357}
					]
				}
			]
		},
		{
			id:58,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9311},
						{text:9358},
						{text:9324},
						{text:9207},
						{text:9359},
						{text:9018},
						{text:9360},
						{text:9196}
					]
				}
			]
		},
		{
			id:59,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9349,value:"DN 65 - DN 150",unit:9350},
							{name:9160,value:"3500",unit:9166},
							{name:9161,value:"180",unit:9167},
							{name:9162,value:"-20/80",unit:9168},
							{name:9163,value:"2900",unit:9169},
							{name:9165,value:"16-25",unit:9171}
						]
					}
				}
			]
		},
		{
			id:60,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9361},
						{text:9362},
						{text:9363},
						{text:9364},
						{text:9365},
						{text:9366},
						{text:9367}
					]
				}
			]
		},
		{
			id:61,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9368},
						{text:9369},
						{text:9370},
						{text:9271},
						{text:9372},
						{text:9073},
						{text:9374},
						{text:9175},
						{text:9176}
					]
				}
			]
		},
		{
			id:62,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9377,value:"0/40",unit:9168},
							{name:9378,value:"≤1.2x103",unit:9379},
							{name:9380,value:"≤40",unit:9168},
							{name:9381,value:"1000",unit:9167},
							{name:9382,value:"10/750",unit:9166},
							{name:9161,value:"3-48",unit:9167},
							{name:9164,value:"1.1-90",unit:9170}
						]
					}
				}
			]
		},
		{
			id:63,
			title:9143,
			detail:
			[
				{list:
					[
						{text:9383},
						{text:9384},
						{text:9385},
						{text:9386},
						{text:9387},
						{text:9388},
						{text:9389},
						{text:9390},
						{text:9391}
					]
				}
			]
		},
		{
			id:64,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9392},
						{text:9393},
						{text:9394}
					]
				}
			]
		},
		{
			id:65,
			title:9159,
			detail:
			[
				{table:
					{
						type:"vertical",
						data:
						[
							{name:9160,value:"72",unit:9166},
							{name:9161,value:"50",unit:9167},
							{name:9162,value:"-10/100",unit:9168},
							{name:9163,value:"3600",unit:9169},
							{name:9164,value:"11",unit:9170}
						]
					}
				}
			]
		},
		{
			id:66,
			detail:
			[
				{text:9396},
				{text:9397},
			]
		},
		{
			id:67,
			title:9013,
			detail:
			[
				{text:9398}
			]
		},
		{
			id:68,
			title:9013,
			detail:
			[
				{text:9399},
				{text:9400}
			]
		},
		{
			id:69,
			detail:
			[
				{text:9401}
			]
		},
		{
			id:70,
			title:9013,
			detail:
			[
				{text:9402}
			]
		},
		{
			id:71,
			title:9013,
			detail:
			[
				{text:9403},
				{text:9404}
			]
		},
		{
			id:72,
			title:9013,
			detail:
			[
				{text:9405},
				{text:9406},
				{text:9407},
			]
		},
		{
			id:73,
			title:9013,
			detail:
			[
				{text:9408},
				{text:9409},
				{text:9410},
			]
		},
		{
			id:74,
			detail:
			[
				{text:9411},
				{text:9412},
				{text:9413}
			]
		},
		{
			id:75,
			detail:
			[
				{text:9415},
				{text:9416},
				{text:9417}
			]
		},
		{
			id:76,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9418},
						{text:9419},
						{text:9420},
						{text:9421},
						{text:9422},
						{text:9423}
					]
				}
			]
		},
		{
			id:77,
			detail:
			[
				{text:9424},
				{text:9425}
			]
		},
		{
			id:78,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9426},
						{text:9427},
						{text:9428}
					]
				}
			]
		},
		{
			id:79,
			title:9159,
			detail:
			[
				{text:9429}
			]
		},
		{
			id:80,
			title:9159,
			detail:
			[
				{text:9430}
			]
		},
		{
			id:81,
			detail:
			[
				{text:9431},
				{text:9432}
			]
		},
		{
			id:82,
			detail:
			[
				{text:9450}
			],
			subSection:[{id:"82A"}]
		},
		{
			id:"82A",
			title:9013,
			detail:
			[
				{list:
					[
						{text:9433},
						{text:9434},
						{text:9435},
						{text:9436},
						{text:9437},
						{text:9438},
						{text:9439}
					]
				}
			]
		},
		{
			id:83,
			title:9440,
			detail:
			[
				{list:
					[
						{text:9441},
						{text:9442},
						{text:9443},
						{text:9444},
						{text:9445},
						{text:9446},
						{text:9447},
						{text:9448},
						{text:9449}
					]
				}
			]
		},
		{
			id:84,
			title:9451,
			detail:
			[
				{
					list:
					[
						{text:9452},
						{text:9453},
						{text:9454},
						{text:9455},
						{text:9456},
						{text:9457},
						{text:9458},
						{text:9459},
						{text:9460},
						{text:9461},
						{text:9462},
						{text:9463}
					]
				}
			]
		},
		{
			id:85,
			title:9054,
			detail:
			[
				{
					list:
					[
						{text:9464},
						{text:9465},
						{text:9466}
					]
				}

			]
		},
		{
			id:86,
			title:9079,
			detail:
			[
				{
					list:
					[
						{text:9467},
						{text:9468},
						{text:9469},
						{text:9470},
						{text:9471}
					]
				}
			]
		},
		{
			id:87,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350,9496],width:2},
							{name:9492,unit:[9171],width:1},
							{name:9493,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["20","1/2”","PN 16","70","46","0,053"],
							["25","3/4”","PN 16","71","45","0,073"],
							["32","1”","PN 16","81","47","0,136"],
							["40","1 1/4”","PN 16","100","56","0,305"],
							["50","1 1/2”","PN 16","116","68","0,293"]
							["63","2”","PN 16","116","68","0,493"],
							["75","2 1/2”","PN 16","122","75","0,745"],
							["90","3”","PN 16","142","80","1,155"],
							["110","4”","PN 16","138","83","1,41"]
						]						
					}
				}
			]
		},
		{
			id:88,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350,9496],width:2},
							{name:9492,unit:[9171],width:1},
							{name:9493,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["20","1/2”","PN 16","83","45","0,085"],
							["25","1/2”","PN 16","83","45","0,098"],
							["25","3/4”","PN 16","83","45","0,1"],
							["32","3/4”","PN 16","89","51","0,117"],
							["32","1”","PN 16","96","47","0,157"],
							["40","1 1/4”","PN 16","118","56","0,43"],
							["50","1 1/2”","PN 16","119","58","0,551"]
							["63","2”","PN 16","138","68","0,603"],
							["75","2 1/2”","PN 16","145","74","0,933"],
							["90","3”","PN 16","165","83","1,196"],
							["110","4”","PN 16","168","84","4 1,782"]
						]
					}
				}
			]
		},
		{
			id:89,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9500,unit:9350,width:1},
							{name:9501,unit:9350,width:1},
							{name:9502,unit:9350,width:1},
							{name:9503,unit:9350,width:1},
							{name:9504,unit:9350,width:1},
							{name:9505,unit:9350,width:1},
							{name:9506,unit:9350,width:1},
							{name:9507,unit:9350,width:1},
							{name:9495,unit:9497,width:1}
						],
						data:
						[
							["15","20","28","65","95","14","14","4",""],
							["20","25","34","75","105","14","16","4",""],
							["25","32","42","85","115","14","16","4",""],
							["32","40","51","100","140","18","16","4",""],
							["40","50","62","110","150","18","16","4",""],
							["50","63","78","125","165","18","18","4",""],
							["65","75","92","145","185","18","18","4",""],
							["80","90",,"108","160","220","18","20","8",""],
							["100","110","125","180","220","18","20","8","1,387"],
							["100","125","135","180","220","18","20","8","1,384"],
							["125","140","158","210","250","18","22","8",""],
							["150","160","178","240","285","22","22","8","2,00"],
							["150","180","188","240","285","22","22","8",""],
							["200","200","235","295","340","22","24","8",""],
							["200","225","238","295","340","22","24","8",""],
							["250","250","288","350","395","22","26","12",""],
							["250","280","294","350","395","22","26","12",""],
							["300","315","338","400","445","22","26","12",""],
							["350","355","376","460","505","22","26","16",""],
							["400","400","435","515","565","26","26","16",""],
							["450","450","465","565","615","26","28","20",""],
							["500","500","533","620","670","26","28","20",""],
							["600","560","618","725","780","30","28","20",""],
							["600","630","645","725","780","30","28","20",""],
							["700","710","740","840","895","30","30","24",""],
							["800","800","843","950","1015","33","32","24",""],
							["900","900","947","1050","1115","33","34","28",""],
							["1000","1000","1050","1160","1230","26","34","28",""]
						]						
					}
				}
			]
		},
		{
			id:90,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9500,unit:9350,width:1},
							{name:9501,unit:9350,width:1},
							{name:9502,unit:9350,width:1},
							{name:9503,unit:9350,width:1},
							{name:9504,unit:9350,width:1},
							{name:9505,unit:9350,width:1},
							{name:9506,unit:9350,width:1},
							{name:9507,unit:9350,width:1},
							{name:9495,unit:9497,width:1}
						],
						data:
						[
							["15","20","28","65","95","14","14","4",""],
							["20","25","34","75","105","14","16","4",""],
							["25","32","42","85","115","14","16","4",""],
							["32","40","51","100","140","18","16","4",""],
							["40","50","62","110","150","18","16","4",""],
							["50","63","78","125","165","18","18","4",""],
							["65","75","92","145","185","18","18","4",""],
							["80","90","108","160","200","18","20","8",""],
							["100","110","125","180","220","18","20","8","1,387"],
							["100","125","135","180","220","18","20","8","1,384"],
							["125","140","158","210","250","18","22","8",""],
							["150","160","178","240","285","22","22","8","2,00"],
							["150","180","188","240","285","22","22","8",""],
							["200","200","235","295","340","22","24","12",""],
							["200","225","238","295","340","22","24","12",""],
							["250","250","288","355","405","26","26","12",""],
							["250","280","294","355","405","26","26","12",""],
							["300","315","338","410","460","26","28","12",""],
							["350","355","376","470","520","26","30","16",""],
							["400","400","430","525","580","30","32","16",""],
							["450","450","465","585","640","30","34","20",""],
							["500","500","533","650","715","33","34","20",""],
							["600","560","618","770","840","36","36","20",""],
							["600","630","645","770","840","36","36","20",""],
							["700","710","740","840","910","39","36","24",""],
							["800","800","843","950","1025","39","38","24",""],
							["900","900","947","1050","1125","39","40","28",""],
							["1000","1000","1050","1170","1255","42","42","28",""]
						]							
					}
				}
			]
		},
		{
			id:91,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9500,unit:9350,width:1},
							{name:9501,unit:9350,width:1},
							{name:9503,unit:9350,width:1},
							{name:9504,unit:9350,width:1},
							{name:9506,unit:9350,width:1},
							{name:9507,unit:9350,width:1},
							{name:9495,unit:9497,width:1}
						],
						data:
						[
							["15","20","65","95","14","4","0,71"],
							["20","25","75","105","16","4","1,01"],
							["25","32","85","115","16","4","1,23"],
							["32","40","100","140","16","4","1,81"],
							["40","50","110","150","16","4","2,10"],
							["50","63","125","165","18","4","2,88"],
							["65","75","145","185","18","4","3,66"],
							["80","90","160","200","20","8","4,62"],
							["100","110","180","220","20","8","5,66"],
							["100","125","180","220","20","8","5,66"],
							["125","140","210","250","22","8","8,15"],
							["150","160","240","285","22","8","10,52"],
							["150","180","240","285","22","8","10,52"],
							["200","200","295","240","24","8","16,57"],
							["200","225","295","240","24","8","16,57"],
							["250","250","350","395","26","12","24,14"],
							["250","280","350","395","26","12","24,14"],
							["300","315","400","445","26","12","30,89"],
							["350","355","460","505","26","16","39,73"],
							["400","400","515","565","26","16","49,56"],
							["450","450","565","615","28","20","63,11"],
							["500","500","620","670","28","20","75,34"],
							["600","560","725","780","28","20","102,16"],
							["600","630","725","780","28","20","102,16"],
							["700","710","840","895","30","24","144,51"],
							["800","800","950","1015","32","24","198,57"],
							["900","900","1050","1115","34","28","254,82"],
							["1000","1000","1150","1200","34","28","310,2657134"],
							["1200","1200","1380","1455","38","32","485,7320185"],
							["1400","1400","1590","1675","42","36","711,7449268"],
							["1600","1600","1820","1915","46","40","1016,319478"]
						]						
					}
				}
			]
		},
		{
			id:92,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9500,unit:9350,width:1},
							{name:9501,unit:9350,width:1},
							{name:9503,unit:9350,width:1},
							{name:9504,unit:9350,width:1},
							{name:9506,unit:9350,width:1},
							{name:9507,unit:9350,width:1},
							{name:9495,unit:9497,width:1}
						],
						data:
						[
							["15","20","65","95","14","4","0,71"],
							["20","25","75","105","16","4","1,01"],
							["25","32","85","115","16","4","1,23"],
							["32","40","100","140","16","4","1,81"],
							["40","50","110","150","16","4","2,10"],
							["50","63","125","165","18","4","2,88"],
							["65","75","145","185","18","4","3,66"],
							["80","90","160","200","20","8","4,62"],
							["100","110","180","220","20","8","5,66"],
							["100","125","180","220","20","8","5,66"],
							["125","140","210","250","22","8","8,15"],
							["150","160","240","285","22","8","10,52"],
							["150","180","240","285","22","8","10,52"],
							["200","200","295","240","24","12","16,28"],
							["200","225","295","240","24","12","16,28"],
							["250","250","355","405","26","12","25,05"],
							["250","280","355","405","26","12","25,05"],
							["300","315","410","460","28","12","35,21"],
							["350","355","470","520","30","16","48,13"],
							["400","400","525","580","32","16","63,68"],
							["450","450","585","640","34","20","82,28"],
							["500","500","650","715","34","20","102,84"],
							["600","560","770","840","36","20","151,22"],
							["600","630","770","840","36","20","151,22"],
							["700","710","840","910","36","24","177,32"],
							["800","800","950","1025","38","24","238,16"],
							["900","900","1050","1125","40","28","305,33"],
							["1000","1000","1170","1255","42","28","395,99"],
							["1200","1200","1390","1485","48","32","632,29"],
							["1400","1400","1590","1685","52","36","885,76"],
							["1600","1600","1820","1930","58","40","1291,78",]
						]							
					}
				}
			]
		},
		{
			id:93,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9500,unit:9350,width:1},
							{name:9501,unit:9350,width:1},
							{name:9502,unit:9350,width:1},
							{name:9503,unit:9350,width:1},
							{name:9504,unit:9350,width:1},
							{name:9505,unit:9350,width:1},
							{name:9506,unit:9350,width:1},
							{name:9507,unit:9350,width:1},
							{name:9495,unit:9497,width:1}
						],
						data:
						[
							["15","20","28","65","95","14","14","4","0,65"],
							["20","25","34","75","105","14","16","4","0,9"],
							["25","32","42","85","115","14","16","4","1,06"],
							["32","40","51","100","140","18","16","4","1,55"],
							["40","50","62","110","150","18","16","4","1,72"],
							["50","63","78","125","165","18","18","4","2,21"],
							["65","75","92","145","185","18","18","4","2,72"],
							["80","90","108","160","200","18","20","8","3,18"],
							["100","110","125","180","220","18","20","8","3,73"],
							["100","125","135","180","220","18","20","8","3,41"],
							["125","140","158","210","250","18","22","8","4,75"],
							["150","160","178","240","285","22","22","8","6,21"],
							["150","180","188","240","285","22","22","8","5,71"],
							["200","200","235","295","340","22","24","8","8,38"],
							["200","225","238","295","340","22","24","8","8,17"],
							["250","250","288","350","395","22","26","12","10,81"],
							["250","280","294","350","395","22","26","12","10,25"],
							["300","315","338","400","445","22","26","12","12,53"],
							["350","355","376","460","505","22","26","16","17,02"],
							["400","400","435","515","565","26","26","16","19,85"],
							["450","450","465","565","615","26","28","20","25,69"],
							["500","500","533","620","670","26","28","20","26,18"],
							["600","560","618","725","780","30","28","20","36,07"],
							["600","630","645","725","780","30","28","20","30,17"],
							["700","710","740","840","895","30","30","24","42,98"],
							["800","800","843","950","1015","33","32","24","58,77"],
							["900","900","947","1050","1115","33","34","28","66,38"],
							["1000","1000","1050","1160","1230","36","34","28","78,61"],
							["1200","1200","1250","1380","1455","39","38","32","118,7"],
							["1400","1400","1460","1590","1675","42","42","36","158,47"],
							["1600","1600","1640","1820","1915","48","46","40","251,72"]
						]						
						
					}
				}
			]
		},
		{
			id:94,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9500,unit:9350,width:1},
							{name:9501,unit:9350,width:1},
							{name:9502,unit:9350,width:1},
							{name:9503,unit:9350,width:1},
							{name:9504,unit:9350,width:1},
							{name:9505,unit:9350,width:1},
							{name:9506,unit:9350,width:1},
							{name:9507,unit:9350,width:1},
							{name:9495,unit:9497,width:1}
						],
						data:
						[
							["15","20","28","65","95","14","14","4","0,646"],
							["20","25","34","75","105","14","16","4","0,952"],
							["25","32","42","85","115","14","16","4","1,06"],
							["32","40","51","100","140","18","16","4","1,55"],
							["40","50","62","110","150","18","16","4","1,72"],
							["50","63","78","125","165","18","18","4","2,21"],
							["65","75","92","145","185","18","18","4","2,72"],
							["80","90","108","160","200","18","20","8","3,18"],
							["100","110","125","180","220","18","20","8","3,78"],
							["100","125","135","180","220","18","20","8","3,41"],
							["125","140","158","210","250","18","22","8","4,75"],
							["150","160","178","240","385","22","22","8","6,21"],
							["150","180","188","240","385","22","22","8","5,71"],
							["200","200","235","295","340","22","24","12","8,09"],
							["200","225","238","295","340","22","24","12","7,88"],
							["250","250","288","355","405","26","26","12","11,72"],
							["250","280","294","355","405","26","26","12","11,16"],
							["300","315","338","410","460","26","28","12","15,44"],
							["350","355","376","470","520","26","30","16","21,92"],
							["400","400","430","525","580","30","32","16","27,11"],
							["450","450","465","585","640","30","34","20","36,85"],
							["500","500","533","650","715","33","34","20","43,15"],
							["600","560","618","770","840","36","36","20","66,24"],
							["600","630","645","770","840","36","36","20","58,66"],
							["700","710","740","840","910","39","36","24","55,49"],
							["800","800","843","950","1025","39","38","24","72,06"],
							["900","900","917","1050","1125","39","40","28","80,64"],
							["1000","1000","1050","1170","1255","42","42","28","109,83"],
							["1200","1200","1250","1390","1485","48","48","32","168,79"],
							["1400","1400","1460","1590","1685","48","52","36","200,75"],
							["1600","1600","1640","1820","1930","55","58","40","327,72"]
						]							
					}
				}
			]
		},
		{
			id:95,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350,9496],width:2},
							{name:9492,unit:[9171],width:1},
							{name:9493,unit:[9350],width:1},
							{name:9498,unit:[9350],width:1},
							{name:9499,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["20","1/2”","PN 16","320","190","76","0,35"],
							["25","3/4”","PN 16","335","185","85","0,480"],
							["32","1”","PN 16","350","175","95","0,842"],
							["32","3/4”","PN 16","350","175","95","0,842"],
							["40","1 1/4”","PN 16","355","177","100","1,030"],
							["50","1 1/2”","PN 16","355","172","100","1,117"],
							["63","2”","PN 16","365","167","110","1,675"],
							["75","2 1/2”","PN 16","393","167","120","3,288"],
							["90","3”","PN 16","440","178","145","4,430"],
							["110","4”","PN 16","505","195","160","6,250"],
							["125","4”","PN 16","505","195","160","6,250"],
							["160","6”","PN 16","440","190","170","12,640"],
							["180","6”","PN 16","440","260","",""],
							["200","8”","PN 16","650","320","250","23,600"],
							["225","8”","PN 16","630","260","250","26,200"],
							["250","10”","PN 16","570","260","240","37,300"],
							["280","10”","PN 16","570","260","250","48,200"],
							["315","12”","PN 16","570","260","250","50,900"],
							["355","14”","PN 16","780","380","250","107,66"],
							["400","16”","PN 16","","","",""],
							["450","18”","PN 16","","","",""],
							["500","20”","PN 16","","","",""]
						]						
					}
				}
			]
		},
		{
			id:96,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9508,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["20","PN 16","35","52","0,012"],
							["25","PN 16","36","52","0,018"],
							["32","PN 16","44","52","0,066"],
							["40","PN 16","54","56","0,095"],
							["50","PN 16","66","60","0,165"],
							["63","PN 16","81","66","0,25"],
							["75","PN 16","97","110","0,416"],
							["90","PN 16","115","125","0,496"],
							["110","PN 16","140","145","1,036"],
							["125","PN 16","155","158","1,417"],
							["140","PN 16","180","170","1,741"],
							["160","PN 16","198","180","2,617"],
							["180","PN 16","222","194","3,451"],
							["200","PN 16","246","208","4,646"],
							["225","PN 16","276","224","6,398"],
							["250","PN 16","308","297","8,14"],
							["280","PN 16","350","329","11,26"],
							["315","PN 16","382","342","13,48"]
						]
					}
				}
			]
		},
		{
			id:97,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9509,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["25","PN 16","36","68","0,05"],
							["32","PN 16","44","72","0,053"],
							["40","PN 16","54","80","0,082"],
							["50","PN 16","66","88","0,126"],
							["63","PN 16","81","96","0,18"],
							["75","PN 16","97","110","0,295"],
							["90","PN 16","115","125","0,375"],
							["110","PN 16","140","145","0,705"],
							["125","PN 16","155","158","0,95"],
							["140","PN 16","180","190","1,159"],
							["160","PN 16","198","180","1,782"],
							["180","PN 16","222","194","2,294"],
							["200","PN 16","246","248","2,747"],
							["225","PN 16","276","224","4,292"],
							["250","PN 16","308","244","5,085"],
							["280","PN 16","345","252","7,01"],
							["315","PN 16","392","220","7,092"],
							["355","PN 16","437","260","12,3"],
							["400","PN 16","492","280","16,3"],
							["450","PN 16","552","300","22,5"],
							["500","PN 16","614","300","32,3"],
							["560","PN 16","687","300","41,7"],
							["630","PN 16","785","400","63,4"],
							["710","PN 16","880","400","79,35"],
							["800","PN 16","985","400",""],
							["900","PN 16","","",""],
							["1000","PN 16","","",""],
							["1200","PN 16","","",""]
						]						
					}
				}
			]
		},
		{
			id:98,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9508,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9498,unit:[9350],width:1},
							{name:9493,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["32","PN 16","44","36","40","36","0,087"],
							["40","PN 16","54","39","42","39","0,121"],
							["50","PN 16","66","68","44","24","0,159"],
							["63","PN 16","81","77","49","28","0,274"],
							["75","PN 16","97","95","61","34","0,437"],
							["90","PN 16","115","111","62","49","0,622"],
							["110","PN 16","140","134","71","63","1,174"],
							["125","PN 16","151","133","75","58","1,308"],
							["160","PN 16","196","165","91","74","2,634"]
						]
					}
				}
			]
		},
		{
			id:99,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9508,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9498,unit:[9350],width:1},
							{name:9493,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["25","PN 16","35","35","32","20","0,078"],
							["32","PN 16","44","56","36","20","0,077"],
							["40","PN 16","54","62","39","22","0,112"],
							["50","PN 16","66","72","44","28","0,179"],
							["63","PN 16","81","81","49","32","0,29"],
							["75","PN 16","97","102","62","40","0,488"],
							["90","PN 16","115","122","62","60","0,859"],
							["110","PN 16","140","140","71","76","1,445"],
							["125","PN 16","154","142","74","68","1,56"],
							["160","PN 16","196","174","90","86","3,1"]		
						]
					}
				}
			]
		},
		{
			id:100,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9508,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9498,unit:[9350],width:1},
							{name:9493,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["32","PN 16","44","102","67","40","0,085"],
							["40","PN 16","54","120","78","46","0,141"],
							["50","PN 16","66","135","86","49","0,222"],
							["63","PN 16","80","152","98","55","0,344"],
							["75","PN 16","98","187","124","67","0,602"],
							["90","PN 16","115","205","143","76","0,883"],
							["110","PN 16","140","255","164","85","1,581"],
							["125","PN 16","153","256","175","88","1,902"],
							["160","PN 16","198","325","207","98","3,75"]
						]						
					}
				}
			]
		},
		{
			id:101,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9508,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9493,unit:[9350],width:1},
							{name:9510,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["32 - 25","PN 16","44","102","67","","0,198"],
							["40 - 25","PN 16","44","120","70","40","0,14"],
							["40 - 32","PN 16","54","120","70","40","0,141"],
							["50 - 25","PN 16","66","135","78","40","0,213"],
							["50 - 40","PN 16","66","135","78","","0,404"],
							["63 - 25","PN 16","81","135","84","40","0,268"],
							["63 - 32","PN 16","81","135","89","45","0,262"],
							["63 - 40","PN 16","81","135","89","45","0,605"],
							["63 - 50","PN 16","81","150","98","55","0,329"],
							["75 - 32","PN 16","97","181","100","46","0,57"],
							["75 - 63","PN 16","97","181","100","46","0,986"],
							["90 - 40","PN 16","115","193","128","67","0,745"],
							["90 - 50","PN 16","115","193","128","67","0,745"],
							["90 - 63","PN 16","115","193","128","67","0,745"],
							["90 - 75","PN 16","115","193","128","67","0,8"],
							["110 - 40","PN 16","140","228","144","68","1,3"],
							["110 - 50","PN 16","140","228","144","68","1,268"],
							["110 - 63","PN 16","140","255","164","84","1,5"],
							["110 - 90","PN 16","140","255","164","84","1,57"],
							["125 - 90","PN 16","155","256","177","88","1,72"],
							["125 - 110","PN 16","155","256","177","88","1,8"],
							["160 - 63","PN 16","198","280","194","95","4,94"],
							["160 - 90","PN 16","198","280","194","95","5,04"],
							["160 - 110","PN 16","198","280","194","95","2,912"]
						]						
					}
				}
			]
		},
		{
			id:102,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9498,unit:[9350],width:1},
							{name:9508,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["63-32","PN 16","106","56","82","0,171"],
							["63-40","PN 16","106","52","82","0,176"],
							["63-50","PN 16","125","60","87","0,189"],
							["75-50","PN 16","139","64","98","0,28"],
							["90-63","PN 16","146","66","116","0,36"],
							["90-75","PN 16","146","66","116","0,45"],
							["110-63","PN 16","161","78","141","0,57"],
							["110-90","PN 16","159","75","141","0,66"],
							["160-110","PN 16","124","95","198","1,2"]
						]						
					}
				}
			]
		},
		{
			id:103,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9510,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}

						],
						data:
						[
							["63","PN 16","161","111","0,425"],
							["75","PN 16","161","110","0,51"],
							["90","PN 16","161","110","0,475"],
							["110","PN 16","161","114","0,58"],
							["125","PN 16","161","112","0,58"],
							["140","PN 16","161","110","0,57"],
							["160","PN 16","161","109","0,57"],
							["180","PN 16","162","95","0,635"],
							["200","PN 16","162","93","0,64"],
							["225","PN 16","162","90","0,66"],
							["250","PN 16","162","87","0,715"],
							["280","PN 16","162","87","0,72"],
							["315","PN 16","162","87","0,755"],
							["355","PN 16","162","87","0,97"],
							["400","PN 16","162","87","0,97"]
						]						
					}
				}
			]
		},
		{
			id:104,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9510,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["63 - 63","PN 16","161","88","0,425"],
							["75 - 63","PN 16","161","88","0,51"],
							["90 - 63","PN 16","161","87","0,475"],
							["110 - 63","PN 16","161","93","0,585"],
							["125 - 63","PN 16","161","91","0,55"],
							["140 - 63","PN 16","161","80","0,57"],
							["160 - 63","PN 16","161","78","0,56"],
							["180 - 63","PN 16","162","74","0,64"],
							["200 - 63","PN 16","162","72","0,64"],
							["225 - 63","PN 16","162","69","0,665"],
							["250 - 63","PN 16","162","66","0,685"],
							["280 - 63","PN 16","162","66","0,705"],
							["315 - 63","PN 16","162","62","0,76"],
							["355 - 63","PN 16","162","62","0,76"],
							["400 - 63","PN 16","162","62","0,7"]		
						]							
					}
				}
			]
		},
		{
			id:105,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9510,unit:[9350],width:1},
							{name:9511,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["63-25","PN 16","88","185","161","0,44"],
							["63-32","PN 16","88","189","161","0,45"],
							["63-40","PN 16","88","188","161","0,46"],
							["63-50","PN 16","88","184","161","0,465"],
							["75-25","PN 16","88","185","161","0,525"],
							["75-32","PN 16","88","189","161","0,535"],
							["75-40","PN 16","88","188","161","0,545"],
							["75-50","PN 16","88","184","161","0,55"],
							["90-25","PN 16","87","184","161","0,485"],
							["90-32","PN 16","87","187","161","0,5"],
							["90-40","PN 16","87","183","161","0,505"],
							["90-50","PN 16","93","189","161","0,515"],
							["110-25","PN 16","93","192","161","0,6"],
							["110-32","PN 16","93","192","161","0,61"],
							["110-40","PN 16","93","186","161","0,62"],
							["110-50","PN 16","91","186","161","0,63"],
							["125-25","PN 16","91","190","161","0,57"],
							["125-32","PN 16","91","190","161","0,585"],
							["125-40","PN 16","91","185","161","0,59"],
							["125-50","PN 16","80","175","161","0,6"],
							["140-25","PN 16","80","179","161","0,585"],
							["140-32","PN 16","80","179","161","0,595"],
							["140-40","PN 16","80","175","161","0,605"],
							["140-50","PN 16","78","173","161","0,615"],
							["160-25","PN 16","78","177","161","0,57"],
							["160-32","PN 16","78","177","161","0,585"],
							["160-40","PN 16","78","177","161","0,59"],
							["160-50","PN 16","78","171","161","0,6"],
							["180-25","PN 16","74","169","162","0,675"],
							["180-32","PN 16","74","172","162","0,685"],
							["180-40","PN 16","74","172","162","0,695"],
							["180-50","PN 16","74","166","162","0,705"],
							["200-25","PN 16","72","165","162","0,665"],
							["200-32","PN 16","72","171","162","0,68"],
							["200-40","PN 16","72","171","162","0,685"],
							["200-50","PN 16","72","166","162","0,695"],
							["225-25","PN 16","69","164","162","0,69"],
							["225-32","PN 16","69","168","162","0,705"],
							["225-40","PN 16","69","168","162","0,71"],
							["225-50","PN 16","69","162","162","0,72"],
							["250-25","PN 16","66","161","162","0,71"],
							["250-32","PN 16","66","165","162","0,725"],
							["250-40","PN 16","66","175","162","0,73"],
							["250-50","PN 16","66","158","162","0,74"],
							["280-25","PN 16","66","161","162","0,725"],
							["280-32","PN 16","66","165","162","0,74"],
							["280-40","PN 16","66","165","162","0,745"],
							["280-50","PN 16","66","156","162","0,755"],
							["315-25","PN 16","62","157","162","0,785"],
							["315-32","PN 16","62","162","162","0,8"],
							["315-40","PN 16","62","160","162","0,805"],
							["315-50","PN 16","62","156","162","0,815"],
							["355-25","PN 16","62","157","162","0,845"],
							["355-32","PN 16","62","162","162","0,86"],
							["355-40","PN 16","62","160","162","0,865"],
							["355-50","PN 16","62","156","162","0,875"],
							["400-25","PN 16","62","157","162","0,945"],
							["400-32","PN 16","62","162","162","0,96"],
							["400-40","PN 16","62","160","162","0,965"],
							["400-50","PN 16","62","160","162","0,975"]	
						]						
					}
				}
			]
		},
		{
			id:106,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9510,unit:[9350],width:1},
							{name:9511,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9498,unit:[9350],width:1},
							{name:9493,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}

						],
						data:
						[
							["40-20","PN 16","99","33","103","70","102","0,324"],
							["40-25","PN 16","99","33","103","70","102","0,331"],
							["40-32","PN 16","99","33","103","70","120","0,353"],
							["50-20","PN 16","105","38","103","70","102","0,325"],
							["50-25","PN 16","105","38","103","70","102","0,323"],
							["50-32","PN 16","105","38","103","70","120","0,342"]
						]
					}
				}
			]
		},
		{
			id:107,
			detail:
			[
				{
					table:
					{
						type:"horizontal",
						title:
						[
							{name:9491,unit:[9350],width:1},
							{name:9492,unit:[9171],width:1},
							{name:9510,unit:[9350],width:1},
							{name:9511,unit:[9350],width:1},
							{name:9494,unit:[9350],width:1},
							{name:9498,unit:[9350],width:1},
							{name:9493,unit:[9350],width:1},
							{name:9495,unit:[9497],width:1}
						],
						data:
						[
							["63-20","PN 16","243","112","161","75","130","1,52"],
							["63-25","PN 16","243","112","161","75","130","1,52"],
							["63-32","PN 16","243","112","161","75","130","1,52"],
							["63-40","PN 16","243","112","161","97","153","1,65"],
							["63-50","PN 16","243","112","161","97","153","1,65"],
							["63-63","PN 16","243","112","161","97","153","1,65"],
							["75-20","PN 16","249","118","161","75","130","1,61"],
							["75-25","PN 16","249","118","161","75","130","1,61"],
							["75-32","PN 16","249","118","161","75","130","1,61"],
							["75-40","PN 16","249","118","161","97","153","1,73"],
							["75-50","PN 16","249","118","161","97","153","1,73"],
							["75-63","PN 16","249","118","161","97","153","1,73"],
							["90-20","PN 16","257","125","161","75","130","1,58"],
							["90-25","PN 16","257","125","161","75","130","1,58"],
							["90-32","PN 16","257","125","161","75","130","1,58"],
							["90-40","PN 16","257","125","161","97","153","1,70"],
							["90-50","PN 16","257","125","161","97","153","1,70"],
							["90-63","PN 16","257","125","161","97","153","1,70"],
							["110-20","PN 16","267","135","161","75","130","1,69"],
							["110-25","PN 16","267","135","161","75","130","1,69"],
							["110-32","PN 16","267","135","161","75","130","1,69"],
							["110-40","PN 16","267","135","161","97","153","1,81"],
							["110-50","PN 16","267","135","161","97","153","1,81"],
							["110-63","PN 16","267","135","161","97","153","1,81"],
							["125-20","PN 16","276","145","161","75","130","1,66"],
							["125-25","PN 16","276","145","161","75","130","1,66"],
							["125-32","PN 16","276","145","161","75","130","1,66"],
							["125-40","PN 16","276","145","161","97","153","1,78"],
							["125-50","PN 16","276","145","161","97","153","1,78"],
							["125-63","PN 16","276","145","161","97","153","1,78"],
							["140-20","PN 16","283","151","161","75","130","1,65"],
							["140-25","PN 16","283","151","161","75","130","1,65"],
							["140-32","PN 16","283","151","161","75","130","1,65"],
							["140-40","PN 16","283","151","161","97","153","1,77"],
							["140-50","PN 16","283","151","161","97","153","1,77"],
							["140-63","PN 16","283","151","161","97","153","1,77"],
							["160-20","PN 16","294","162","161","75","130","1,63"],
							["160-25","PN 16","294","162","161","75","130","1,63"],
							["160-32","PN 16","294","162","161","75","130","1,63"],
							["160-40","PN 16","294","162","161","97","153","1,76"],
							["160-50","PN 16","294","162","161","97","153","1,76"],
							["160-63","PN 16","294","162","161","97","153","1,76"],
							["180-20","PN 16","304","172","162","75","130","1,74"],
							["180-25","PN 16","304","172","162","75","130","1,74"],
							["180-32","PN 16","304","172","162","75","130","1,74"],
							["180-40","PN 16","304","172","162","97","153","1,87"],
							["180-50","PN 16","304","172","162","97","153","1,87"],
							["180-63","PN 16","304","172","162","97","153","1,87"],
							["200-20","PN 16","311","179","162","75","130","1,74"],
							["200-25","PN 16","311","179","162","75","130","1,74"],
							["200-32","PN 16","311","179","162","75","130","1,74"],
							["200-40","PN 16","311","179","162","97","153","1,86"],
							["200-50","PN 16","311","179","162","97","153","1,86"],
							["200-63","PN 16","311","179","162","97","153","1,86"],
							["225-20","PN 16","323","192","162","75","130","1,77"],
							["225-25","PN 16","323","192","162","75","130","1,77"],
							["225-32","PN 16","323","192","162","75","130","1,77"],
							["225-40","PN 16","323","192","162","97","153","1,89"],
							["225-50","PN 16","323","192","162","97","153","1,89"],
							["225-63","PN 16","323","192","162","97","153","1,89"],
							["250-20","PN 16","335","203","162","75","130","1,78"],
							["250-25","PN 16","335","203","162","75","130","1,78"],
							["250-32","PN 16","335","203","162","75","130","1,78"],
							["250-40","PN 16","335","203","162","97","153","1,90"],
							["250-50","PN 16","335","203","162","97","153","1,90"],
							["250-63","PN 16","335","203","162","97","153","1,90"],
							["280-20","PN 16","350","218","162","75","130","1,80"],
							["280-25","PN 16","350","218","162","75","130","1,80"],
							["280-32","PN 16","350","218","162","75","130","1,80"],
							["280-40","PN 16","350","218","162","97","153","1,92"],
							["280-50","PN 16","350","218","162","97","153","1,92"],
							["280-63","PN 16","350","218","162","97","153","1,92"],
							["315-20","PN 16","367","235","162","75","130","1,86"],
							["315-25","PN 16","367","235","162","75","130","1,86"],
							["315-32","PN 16","367","235","162","75","130","1,86"],
							["315-40","PN 16","367","235","162","97","153","1,96"],
							["315-50","PN 16","367","235","162","97","153","1,96"],
							["315-63","PN 16","367","235","162","97","153","1,96"],
							["355-20","PN 16","387","255","162","75","130","1,90"],
							["355-25","PN 16","387","255","162","75","130","1,90"],
							["355-32","PN 16","387","255","162","75","130","1,90"],
							["355-40","PN 16","387","255","162","97","153","1,98"],
							["355-50","PN 16","387","255","162","97","153","1,98"],
							["355-63","PN 16","387","255","162","97","153","1,98"],
							["400-20","PN 16","410","278","162","75","130","1,93"],
							["400-25","PN 16","410","278","162","75","130","1,93"],
							["400-32","PN 16","410","278","162","75","130","1,93"],
							["400-40","PN 16","410","278","162","97","153","1,97"],
							["400-50","PN 16","410","278","162","97","153","1,97"],
							["400-63","PN 16","410","278","162","97","153","1,97"]	
						]						
					}
				}
			]
		},
		{
			id:108,
			detail:
			[
				{text:9512}
			]
		},
		{
			id:109,
			title:9513,
			detail:
			[
				{text:9514},
			],
			subSection:[{id:"109A"},{id:"109B"}]
		},
		{
			id:"109A",
			title:9515,
			detail:
			[
				{list:
					[
						{text:9516},
						{text:9517}
					]
				}
			]
		},
		{
			id:"109B",
			title:9518,
			detail:
			[
				{list:
					[
						{text:9519},
						{text:9520},
						{text:9521},
					]
				}
			]
		},
		{
			id:110,
			title:9522,
			detail:
			[
				{text:9523},
				{text:9524},
				{list:
					[
						{text:9525},
						{text:9526},
						{text:9527},
						{text:9528},
						{text:9529},
						{text:9530},
					]
				}
			]
		},
		{
			id:111,
			title:9451,
			detail:
			[
				{text:9531}
			]
		},
		{
			id:112,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9532},
						{text:9533},
						{text:9534}
					]
				}
			]		
		},
		{
			id:113,
			title:9451,
			detail:
			[
				{text:9535}
			]
		},
		{
			id:114,
			title:9451,
			detail:
			[
				{text:9536}
			]		
		},
		{
			id:115,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9532},
						{text:9533},
						{text:9534},
						{text:9537}
					]
				}
			]		
		},
		{
			id:116,
			detail:
			[
				{text:9538},
				{text:9539},
				{text:9540}
			]		
		},
		{
			id:117,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9541},
						{text:9542},
						{text:9543},
						{text:9544}
					]
				}
			]		
		},
		{
			id:118,
			title:9545,
			detail:
			[
				{list:
					[
						{text:9546},
						{text:9547}
					]
				}
			]		
		},
		{
			id:119,
			title:9451,
			detail:
			[
				{text:9548}
			]		
		},
		{
			id:120,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9549},
						{text:9550}
					]
				}
			]		
		},
		{
			id:121,
			title:9545,
			detail:
			[
				{list:
					[
						{text:9546},
						{text:9547}
					]
				}
			]		
		},
		{
			id:122,
			title:9451,
			detail:
			[
				{text:9551}
			]		
		},
		{
			id:123,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9541},
						{text:9542},
						{text:9543},
						{text:9544}
					]
				}
			]		
		},
		{
			id:124,
			title:9545,
			detail:
			[
				{list:
					[
						{text:9546},
						{text:9547}
					]
				}
			]		
		},
		{
			id:125,
			title:9451,
			detail:
			[
				{text:9554}
			]		
		},
		{
			id:126,
			title:9013,
			detail:
			[
			]		
		},
		{
			id:127,
			title:9545,
			detail:
			[
			]		
		},
		{
			id:128,
			detail:
			[
				{text:9555}
			]		
		},
		{
			id:129,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9556}
					]
				}
			]		
		},
		{
			id:130,
			title:9451,
			detail:
			[
				{text:9557}
			]		
		},
		{
			id:131,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9541},
						{text:9542},
						{text:9543},
						{text:9544}
					]
				}
			]		
		},
		{
			id:132,
			title:9545,
			detail:
			[
				{list:
					[
						{text:9546},
						{text:9547}
					]
				}
			]		
		},
		{
			id:133,
			title:9451,
			detail:
			[
				{text:9558}
			]		
		},
		{
			id:134,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9559},
						{text:9560},
						{text:9561},
						{text:9562}
					]
				}
			]		
		},
		{
			id:135,
			title:9451,
			detail:
			[
				{text:9563}
			]		
		},
		{
			id:136,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9559},
						{text:9560},
						{text:9561},
						{text:9562}
					]
				}
			]		
		},
		{
			id:137,
			title:9451,
			detail:
			[
				{text:9568}
			],
			subSection:[{id:"137A"}]		
		},
		{
			id:"137A",
			title:9571,
			detail:
			[
				{list:
					[
						{text:9572},
						{text:9573}
					]
				}
			]
		},
		{
			id:138,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9569},
						{text:9570}
					]
				}
			]
		},
		{
			id:139,
			title:9451,
			detail:
			[
				{text:9574},
				{list:
					[
						{text:9578},
						{text:9579},
						{text:9580},
						{text:9581},
						{text:9553}
					]
				}				
			]
		},
		{
			id:140,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9544},
						{text:9575},
						{text:9576},
						{text:9577}
					]
				}
			]
		},
		{
			id:141,
			title:9451,
			detail:
			[
				{text:9582}
			]		
		},
		{
			id:142,
			title:9013,
			detail:
			[
				{list:
					[
						{text:9583},
						{text:9584},
						{text:9585}
					]
				}
			]
		}
		
	];
	
});