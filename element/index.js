const App = {
  data() {
    return {
        license_data: {

            device_data:{
            title: "Device",
            id: "device_license",
            config: [
                {
                    id: "device_type",
                    options: [
                        {
                            id: "cloud_link",
                            label: "Cloud Link",
                            subfields: [
                                {
                                    id: "sub_type",
                                    options: [
                                        { id: "virtual", label: "Virtual" },
                                        { id: "hardware", label: "Hardware" },
                                    ]
                                }
                            ],

                            licenses: [
                                {
                                    id: "location_license",
                                    label: "Location License",
                                    min: 1,
                                    max: 1000,
                                },
                                {
                                    id: "camera_license",
                                    label: "Camera License",
                                    min: 1,
                                    max: 10000,
                                }
                            ]
                        }
                    ]
                }
            ]
            },  
            icc_data: {
                title: "ICCC",
                id: "iccc_license",

                config: [
                    {
                        identity: "is_iccc_enabled",
                        title: "ICCC",
                        type: "switch",
                        value: false
                    },
                    {
                        identity: "license_type",
                        title: "License Type",
                        type: "dropdown",
                        value: "",

                        options: [
                            {
                                identity: "agent_rpa_license",
                                title: "Agent RPA License"
                            }
                        ],

                        license: [
                            {
                                title: "Count of RPA License",
                                identity: "no_of_license",
                                min: 1,
                                max: 20000
                            },
                            {
                                title: "Expiry ( Number of Days )",
                                identity: "expiry_days",
                                min: 1,
                                max: 36500,
                                lock: true
                            }
                        ],
                    }
                ]
            },
            cloud_license:{
                title: "Cloud",
                id: "cloud_license",
                config:[
                    {
                        title:"Cloud Pack",
                        id:"cloud_pack",
                        type:'dropdown',
                        options:[
                            {title:"2 days Video" , id:'2_days_video_backup'},
                            {title:"3 days Video" , id:'3_days_video_backup'},
                        ],
                    },{
                        type:"number",
                        license: [
                            {
                                title: "Count of RPA License",
                                identity: "no_of_license",
                                min: 1,
                                max: 20000
                            },
                            {
                                title: "Expiry ( Number of Days )",
                                identity: "expiry_days",
                                min: 1,
                                max: 36500,
                                lock: true
                            }
                        ],
                    },{
                        type:'number',
                        framerate:[
                            {
                                title: "Framerate",
                                identity: "no_of_framerate",
                                min: 1,
                                max: 30
                            }
                        ]
                    },{
                        title:"Stream Type",
                        id:"stream_type",
                        type:'dropdown',
                        options:[
                            {
                                title:"Main Stream",
                                id:"main_stream"
                            },
                            {
                                title:"Sub Stream",
                                id:"sub_stream"
                            },

                        ]
                    },
                    {
                        title:"Video Encoding",
                        id:"video_encoding",
                        type:'dropdown',
                        options:[
                            {
                                title:"H.264",
                                id:'H.264'
                            },
                            {
                                title:"H.265",
                                id:'H.265'
                            }
                        ]
                    }
                ]
            },
        },

        activeLicenseId: "device_license",
        licenseFormData:{
            device:{
                device_type:'',
                sub_type:'',
                location_license:0,
                camera_license:0,
                
            },
            icc:{
                icc_enable:true,
                rpa_selected:"agent_rpa_license",
                no_of_license:0,
                expiry_days:0
            },
            cloud_license: {
    cloud_pack: "",
    no_of_license: 1,
    expiry_days: 1,
    no_of_framerate: 1,
    stream_type: "",
    video_encoding: ""
  }
        },
    };
  },

    methods:{

  handleLicenseInput(lic , type) {
   
    if(type == 'iccc' || type == 'cloud'){
        var value = this.licenseFormData.icc[lic.identity];
    }

  const groups = [
    { count: "no_of_license", expiry: "expiry_days" },
    { count: "no_of_viewer_license", expiry: "viewer_expiry_days" }
  ];

  const group = groups.find(g =>
    lic.identity === g.count || lic.identity === g.expiry
  );
  if (!group) return;

  const licenseSection = this.license_data.icc_data.config[1];
  const allFields = [
    ...(licenseSection.license || []),
    ...(licenseSection.viewer_license || [])
  ];

  const countField = allFields.find(f => f.identity === group.count);
  const expiryField = allFields.find(f => f.identity === group.expiry);

  const countValue = this.licenseFormData.icc[group.count];

  // Special logic only for min = 0
  if (countField.min === 0 || expiryField.min === 0) {

    if (lic.identity === group.count) {
      if (value === 0) {
        expiryField.lock = true;
        this.licenseFormData.icc[group.expiry] = 0;
      }
      if (value > 0 && expiryField.lock) {
        expiryField.lock = false;
        this.licenseFormData.icc[group.expiry] = 1;
      }
    }

    if (lic.identity === group.expiry) {
      if (countValue > 0 && value === 0) {
        this.licenseFormData.icc[group.expiry] = 1;
      }
    }
  }
},




        submitlicenseFormData(){
            console.log(this.licenseFormData.icc);
            console.log(this.licenseFormData);
        }
    }

};

const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");
