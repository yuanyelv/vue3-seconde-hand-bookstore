/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-18 15:21:36
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-19 18:54:22
 * @FilePath: \pcVue1\src\api\types\common.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export interface ILoginInfo {
    logo_square: string
    logo_rectangle: string
    logo_logo: string
    slide: string[]
}

export interface IUserInfo {
    id: number
    account: string
    head_pic: string
}

export interface IMenu {
    path: string
    title: string
    icon: string
    header: string
    children?: IMenu
}

export interface ILoginResponse {
    token: string
    expires_time:number
    menus: IMenu[]
    unique_auth: string[]
    user_info: IUserInfo
    logo: string
    logo_square: string
    version: string
    newOrderAudioLink: string
}

export interface UserData {
    id: number
    username: string
    grade: number
    college: string
    major: string
    phone: number
    school: string
    address: string
}
export interface IUserManage{
    total:number
    records: UserData
}
