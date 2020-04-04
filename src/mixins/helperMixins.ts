/* eslint-disable */
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default
{
    computed: {
        ...mapGetters([])
    },

    methods:
        {
            ...mapActions([]),
            register_user_and_notify(params : any, method : any) {

                let app = this
                axios.get('/auth/register', params).then(res => {
                        method()
                    }

                ).catch(err =>
                    {
                        console.debug(err)
                    }
                );
            },
            makeToast(variant = null, data : string, title : string) {
                // @ts-ignore
                this.$bvToast.toast(data, {
                    title: title,
                    variant: variant,
                    solid: true
                })
            },

            validEmail (email: string) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return re.test(email)
            },

            checkPassword (str: string) {
                // at least one number, one lowercase and one uppercase letter
                // at least seven characters
                var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/
                return re.test(str)
            }
        }

}
