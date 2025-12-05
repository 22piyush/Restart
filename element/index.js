const App = {
  data() {
    return {
        license_config: [
        {
            title: "Device",
            id: "device_license",
            disabled: false,
            fields: [
                {
                    id: "device_type",
                    label: "Select Device",
                    input_type: "dropdown",
                    value: "",
                    options: [
                        {
                            id: "cloud_link",
                            label: "Cloud Link",
                            subfields: [
                                {
                                    id: "sub_type",
                                    label: "Select Link Type",
                                    input_type: "dropdown",
                                    value: "",
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
                                    input_type: "number",
                                    value: 0,
                                    min: 0,
                                    max: Infinity,
                                },
                                {
                                    id: "camera_license",
                                    label: "Camera License",
                                    input_type: "number",
                                    value: 0,
                                    min: 0,
                                    max: Infinity,
                                }
                            ]
                        }
                    ]
                }
            ]
        },    
        { title: "Cloud", id: "cloud_license", config: [] },
        { title: "ICCC", id: "icc_license", config: [] }
        ],
        formData: {},
        activeLicenseId: "device_license"

    };
  },

    
    methods:{
        initFormFields() {
  const fields = this.deviceLicenseOptions;
  fields.forEach(field => {
    if (this.formData[field.id] === undefined) {
      this.formData[field.id] = 1; // default value
    }
  });
},

        submitFormData(){
            console.log(this.formData);
        }
    }

};

const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");
