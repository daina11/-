import axios from 'axios'
export function uploadImage(file) {
    return axios({
        url:'http://10.12.181.136/api/base/upload',
        method: 'post',
        data: file
    })
}