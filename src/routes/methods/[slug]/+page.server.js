// Here GET request is made to the API to fetch the method data based on the slug in the URL. 
// The data is then returned in a structured format for use in the page.
export const load = async ({ params, fetch }) => {
    const { slug } = params;

    const endpoint = `https://fdnd-agency.directus.app/items/leren_met_ai_methodes?filter[slug][_eq]=${slug}&fields=*,lecturer.*,tips.leren_met_ai_tips_id.*`;

    const response = await fetch(endpoint)
    const { data } = await response.json()

    const method = data?.[0];

    return {
        method: method ? {
            title: method.title,
            description: method.description,
            application: method.application,
            advantages: method.advantages,
            considerations: method.considerations,
            steps: method.method,
            llm: method.llm,
            lecturer: method.lecturer || { id: null, sort: null, name: '' },
            tips: method.tips
        } : null
    }
}
// Here a POST request is made to the API to submit a new tip for the method in the detail page [SLUG]. 
export const actions = {
    addTip: async ({ request, fetch }) => {
        // Read form data
        const formData = await request.formData()
        const tip = formData.get("tips")
        const methodId = formData.get ("methodId")

        // Create the tip
        const tipResponse = await fetch(`https://fdnd-agency.directus.app/items/leren_met_ai_tips`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tip: tip
            })
        })

        const tipData = await tipResponse.json()
        const tipId = tipData.data.id

        // Link the tip to the method
        await fetch(`https://fdnd-agency.directus.app/items/leren_met_ai_methodes_leren_met_ai_tips`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                leren_met_ai_methodes_id: methodId,
                leren_met_ai_tips_id: tipId
            })
        })

        return { success: true }
        if (!tip || tip.length < 20) {
            return { success: false }
        }
    }
}