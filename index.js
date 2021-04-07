function findMatching(drivers, name) {
    return drivers.filter(d => {
        return d.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(d => {
        return d.startsWith(name)
    })
}

function matchName(drivers, name) {
    return drivers.filter (d => {
        return d.name === name
    })
}