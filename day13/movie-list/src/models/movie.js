class Movie {
    constructor( {id, name, downloadUrl }) {
        this.id = id;
        this.name = name;
        this.downloadUrl = downloadUrl;
    }

    toJson() {
        return {
            name:this.name,
            downloadUrl: this.downloadUrl
        }
    }

    static fromFirebase(doc)
 {
    const data = doc.data();

    return new Movie({
        id: doc.id,
        name: data.name,
        downloadUrl: data.downloadUrl
    })
 }}