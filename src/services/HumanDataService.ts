import http from '@/http-common';

class HumanDataService {
    getOne() {
        return http.get('/');
    }

    get(count: number) {
        return http.get(`?results=${count}`);
    }
}

export default new HumanDataService();
