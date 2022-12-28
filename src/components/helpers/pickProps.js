export const pickProps = (object = {}, props = []) => {
    const obj = {};

    for (const key in object) {
        if (props.includes(key) && object.hasOwnProperty(key)) {
            obj[key] = object[key];
        }
    }

    return obj;
};

export const pickPropsArr = (array = [], props = []) => {
    return array.map((item, index) => {
        if (typeof item === 'object') {
            return pickProps(item, props);
        } else {
            throw `First argument must be array of objects. But index: ${index} is ${typeof item}`;
        }
    });
};