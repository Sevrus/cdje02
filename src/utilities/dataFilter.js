const dataFilter = (setDatas, _datas, id) => {
    setDatas(_datas => {
        const datasFilter = _datas.data.filter(item => item.id !== id);
        return { ..._datas, data: datasFilter };
    })
};

export { dataFilter };