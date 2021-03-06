const groupAdultsByAgeRange = (args) => {
    const acc = {
        '51 and older': [],
        '41-50': [],
        '31-40': [],
        '21-30': [],
        '20 and younger': []
    }

    const AGE_TEENAGERS = 18
    const AGE_TWENTIES = 20
    const AGE_THIRTIES = 30
    const AGE_FOURTIES = 40
    const AGE_SENIORS = 50

    args.filter(arr => arr.age > AGE_TEENAGERS)
        .reduce((result, arg) => {
            if (arg.age > AGE_SENIORS) {
                acc['51 and older'].push(arg)
                return result
            }
            if (arg.age > AGE_FOURTIES) {
                acc['41-50'].push(arg)
                return result
            }
            if (arg.age > AGE_THIRTIES) {
                acc['31-40'].push(arg)
                return result
            }
            if (arg.age > AGE_TWENTIES) {
                acc['21-30'].push(arg)
                return result
            }
            acc['20 and younger'].push(arg)
            return result
        }, acc)
    return acc
}

module.exports = { groupAdultsByAgeRange }