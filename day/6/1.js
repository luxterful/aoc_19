module.exports.main = function (input) {
    const input_lines = input.trim().split(/\r?\n/);

    const map = generate_universal_orbit_map(input_lines);

    let counter = 0;
    let keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
        counter += count_parents(map[keys[i]])
    }
    return counter
}

const generate_universal_orbit_map = (input_lines) => {
    let map = {};

    for (let i = 0; i < input_lines.length; i++) {
        let [parent, child] = input_lines[i].trim().split(")")
        if (!map[parent]) {
            map[parent] = { name: parent, children: [] }
        }
        if (!map[child]) {
            map[child] = { name: child, children: [], parent: map[parent] }
        } else {
            map[child]["parent"] = map[parent]
        }
        map[parent]["children"].push(map[child])
    }

    return map;
}

const count_parents = (orbit, depth = 0) => {
    if (orbit.parent) {
        return count_parents(orbit.parent, depth + 1)
    }
    return depth
}

module.exports.generate_universal_orbit_map = generate_universal_orbit_map;

