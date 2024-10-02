import courses from '@/assets/jsons/courses.json';

export const getCourseById = async (id:number) : Promise<any> => {
    for (let index = 0; index < courses.length; index++) {
        const element = courses[index];
        if(element.id == id){
            return element;
        }
    }
    return null;
}