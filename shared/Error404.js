// TODO: still working on this
export let Error404 = {
    render : async () => {
        let view =  /*html*/`
            <section class="error-message">
                <h1> 404 Error </h1>
            </section>
        `
        return view
    },
    after_render: async () => {
    }
}