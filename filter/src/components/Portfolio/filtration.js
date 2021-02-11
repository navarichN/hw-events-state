export function filtration(data, filter) {
    return data.filter(obj => obj.category === filter)
}