export const fetchUser = async () => {
    const resp = await fetch('https://randomuser.me/api/');
    const data = await resp.json();
    const { first, last } = data.results[0].name
    const { country } = data.results[0].location
    const countryCode = data.results[0].nat
    const image = data.results[0].picture.large
    const obj = {
        firstName: {
            text: first,
            highlight: false
        },
        lastName: {
            text: last,
            highlight: false
        },
        countryCode: {
            text: countryCode,
            highlight: false
        },
        country: {
            text: country,
            highlight: false
        },
        image: {
            text: image,
            highlight: false
        }
    }

    return obj
}

