
export const getAge = (birtdate: string) => {

    return new Date().getFullYear() - new Date(birtdate).getFullYear()

}