const app = new Vue({
    el: "#root",
    data: {
        discList: "",
    },

    methods: {

    },

    mounted() {
        const url = "https://flynn.boolean.careers/exercises/api/array/music";
        axios
            .get(url)
            .then(info => {
                this.discList = info.data.response;
            })
    }
});