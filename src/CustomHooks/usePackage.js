const { useState, useEffect } = require("react");

const usePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('service_pkg.json')
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);

    return [packages, setPackages];
}

export default usePackage;