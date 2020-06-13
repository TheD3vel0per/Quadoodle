import * as gis from 'g-i-s';

const gisAsync = (keyword) => {
    return new Promise((resolve, reject) => {
        gis(keyword, (error, results) => {
            if (!!error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const getImagesFunction = async (data, context) => {
    
    const imageKeyword = data.imageKeyword;
    let results: any = await gisAsync(imageKeyword);

    results = results.map(result => ({
        original: result['url'],
        thumbnail: result['url'],
    }));

    return results;

};

export default getImagesFunction;