import axios from 'axios';
import VueNotifications from 'vue-notifications';

const state = {
    // Исходное состояние
    user: null
};

const mutations = {
    // Изменяем состаяние state
};

const actions = {
    // Отправляем запрос на сервер
    auth ({ commit }, { email, password, repassword }) {
        if (password === repassword || !repassword) {
            axios.post('/api/auth', {
                email, password
            }).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            VueNotifications.error({ message: 'Не верные данные'})
        }
    }
};

const getters = {
    // Здесь получаем данные
};

export default {
    state,
    mutations,
    actions,
    getters
}