const parseSqlResult = (payload: object) => {
    if (Array.isArray(payload)) {
        return payload.length == 0 ? undefined : JSON.parse(JSON.stringify(payload));
    }
    
    return payload == undefined ? undefined : JSON.parse(JSON.stringify(payload));
};

export default parseSqlResult;