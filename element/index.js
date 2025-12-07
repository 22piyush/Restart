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
            iccc_data: {
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
                                min: 0,
                                max: 20000
                            },
                            {
                                title: "Expiry ( Number of Days )",
                                identity: "expiry_days",
                                min: 0,
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
                                min: 0,
                                max: 20000
                            },
                            {
                                title: "Expiry ( Number of Days )",
                                identity: "expiry_days",
                                min: 0,
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
            iccc:{
                iccc_enable:true,
                rpa_selected:"agent_rpa_license",
                no_of_license:0,
                expiry_days:0
            },
            cloud_license: {
                cloud_pack: "",
                no_of_license: 0,
                expiry_days: 0,
                no_of_framerate: 1,
                stream_type: "",
                video_encoding: ""
            }
        },
    };
  },

    methods:{

        handleLicenseInput(lic, list, type) {

            // form model: iccc / cloud_license / future
            const formModel = this.licenseFormData[type];
            const value = formModel[lic.identity];

            // Pairs that use the lock logic
            const groups = [
                { count: "no_of_license", expiry: "expiry_days" },
                { count: "no_of_viewer_license", expiry: "viewer_expiry_days" }
            ];

            // Find which pair this field belongs to (if any)
            const currentGroup = groups.find( g => lic.identity === g.count || lic.identity === g.expiry);
            if (!currentGroup) return;

            // Find the pair objects from the SAME list you passed (field.license)
            const countField  = list.find(f => f.identity === currentGroup.count);
            const expiryField = list.find(f => f.identity === currentGroup.expiry);

            if (!countField || !expiryField) return;
            const countValue = formModel[currentGroup.count];

            if (countField.min === 0 || expiryField.min === 0) {
                // When user changes COUNT field
                if (lic.identity === currentGroup.count) {
                    if (value === 0) {
                        // lock expiry and set 0
                        expiryField.lock = true;
                        formModel[currentGroup.expiry] = 0;
                    }

                    if (value > 0 && expiryField.lock) {
                        // first time >0 → unlock + set expiry = 1
                        expiryField.lock = false;
                        formModel[currentGroup.expiry] = 1;
                    }
                }
                // When user changes EXPIRY field
                if (lic.identity === currentGroup.expiry) {
                    if (countValue > 0 && value === 0) {
                        // cannot make expiry 0 if count > 0
                        formModel[currentGroup.expiry] = 1;
                    }
                }
            }
        },

        submitlicenseFormData(){
            console.log(this.licenseFormData.iccc);
            console.log(this.licenseFormData);
        }
    }

};

const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");
