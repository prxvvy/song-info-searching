import axios, { AxiosInstance } from "axios";

class Api {

    public api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:3001",
        });
    };

    private async apiCall(request: any) {
        try {
            return (await request()).data;
        } catch (e) {
            console.log(e);
            return e.response.data;
        }
    };

    public async getSongInfo(route: string, song_name: string) {
        return await this.apiCall(() => {
            this.api.get(`/api/${route}/${song_name}`, {
                params: {
                    song_name: song_name
                }
            });
        });
    };
}

const api: Api = new Api();
export default api;