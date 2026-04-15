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

