export default {
    install (Vue, options) {
        let storage = window.localStorage;
        try {
            storage.setItem('_judge', '');
        } catch (err) {
            storage = {
                getItem () {
                    return;
                },
                setItem () {
                    return;
                }
            };
        }
        let platform = null;
        const map = {
            '1': '1',
            '2': '2',
        };
        Object.defineProperty(Vue.prototype, '$platform', {
            get () {
                if (platform !== null) {
                    return platform;
                }
                const query = this.$route ? this.$route.query : {};
                if (query._platform) {
                    platform = map[query._platform];
                } else if (storage.getItem('_platform')) {
                    platform = map[storage.getItem('_platform')];
                } else if (/iphone|android|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent)) {
                    platform = '2';
                } else {
                    platform = '1';
                }
                platform = platform || '1';
                storage.setItem('_platform', platform);
                return platform;
            }
        });
    }
};