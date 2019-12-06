const _OP = { ADD: "01", MUL: "02", IN: "03", OUT: "04", FIN: "99" }
const _MD = { POS: "0", IMM: "1" }
const _IN = 1

module.exports.main = function (input) {

    let prog = input.trim().split(",").map(x => parseInt(x));;
    let ptr = 0;
    let output = []

    do {
        const [MD3, MD2, MD1, OP] = val2opArr(prog[ptr])
        switch (OP) {
            case _OP.ADD:
                const add_1 = md2par(prog, ptr, MD1, 1)
                const add_2 = md2par(prog, ptr, MD2, 2)
                const add_to = prog[ptr + 3]

                prog[add_to] = add_1 + add_2

                console.log(`${ptr}: ${[MD3, MD2, MD1, OP]} = ADD ${add_1} ${add_2} -> ${add_to}`)

                ptr += 4
                break;
            case _OP.MUL:
                const mul_1 = md2par(prog, ptr, MD1, 1)
                const mul_2 = md2par(prog, ptr, MD2, 2)
                const mul_to = prog[ptr + 3]

                prog[mul_to] = mul_1 * mul_2

                console.log(`${ptr}: ${[MD3, MD2, MD1, OP]} = MUL ${mul_1} ${mul_2} -> ${mul_to}`)

                ptr += 4
                break;
            case _OP.IN:
                const read = _IN
                const read_to = prog[ptr + 1]

                prog[read_to] = read

                console.log(`${ptr}: ${[MD3, MD2, MD1, OP]} = READ ${read} -> ${read_to}`)

                ptr += 2
                break;
            case _OP.OUT:
                const out = prog[prog[ptr + 1]]

                output.push(out)

                console.log(`${ptr}: ${[MD3, MD2, MD1, OP]} = WRITE ${out}`)

                ptr += 2
                break;
            case _OP.FIN:
                console.log(`${ptr}: ${[MD3, MD2, MD1, OP]} = FIN`)

                return `result ${prog[0]}, out ${output}`
            default:
                console.log(`${ptr}: ${[MD3, MD2, MD1, OP]} = sth went wrong bljad`);
                console.log(`unknown opcode ${OP}`);
                //console.log(prog);
                return;
        }
    } while (ptr < prog.length)
}

const md2par = (prog, ptr, md, plus) => {
    if (md === _MD.IMM) {
        return prog[ptr + plus]
    } else if (md === _MD.POS) {
        return prog[prog[ptr + plus]]
    }
}

const val2opArr = (val) => {
    const str = String("0000" + val).slice(-5)
    return [...str.slice(-5, -2).split(""), str.slice(-2)]
}