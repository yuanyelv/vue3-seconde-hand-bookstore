/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 18:43:04
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 19:25:08
 * @FilePath: \pcVue1\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 18:43:04
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 14:08:22
 * @FilePath: \pcVue1\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 18:43:04
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-15 22:39:13
 * @FilePath: \pcVue1\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'

createApp(App)
  .use(router)
  .use(store, key)
  .use(elementPlus)
  .mount('#app')
