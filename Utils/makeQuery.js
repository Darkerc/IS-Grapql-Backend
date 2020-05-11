import util from 'util'

export default async (db, query) => {
    let makeQuery = util.promisify(db.query).bind(db)
    let data = await makeQuery(query)
    let iteratedData = JSON.parse(JSON.stringify(data))
    return iteratedData;
}