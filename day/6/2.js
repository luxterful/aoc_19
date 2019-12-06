var day1 = require("./1.js");

module.exports.main = function (input) {
    const input_lines = input.trim().split(/\r?\n/);

    const map = day1.generate_universal_orbit_map(input_lines)




    return find_santa_in_parent(map["YOU"])
}

const find_santa_in_parent = (orbit, depth = 0) => {
    if (orbit.parent) {
        const santa_depth = find_santa_in_children(orbit.parent);
        if (santa_depth) {
            return depth + santa_depth - 1;
        } else {
            return find_santa_in_parent(orbit.parent, depth + 1)
        }
    }
}

const find_santa_in_children = (orbit, depth = 0) => {
    if (orbit["name"] === "SAN") {
        return depth
    }
    for (let i = 0; i < orbit["children"].length; i++) {
        const final_depth = find_santa_in_children(orbit["children"][i], depth + 1)
        if (final_depth) {
            return final_depth
        }
    }
}