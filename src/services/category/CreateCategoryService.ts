import prismaClient from "../../prisma";

interface CategoryRequest{
    name: string;
}


class CreateCategoryService{
    async excute({name}: CategoryRequest){
        
        if(name === ''){
            throw new Error('name invalid')
        }

        const category = await prismaClient.category.create({
            data:{
                name: name,
            },
            select:{
                id: true,
                name: true,
            }
        })

        return category;
    
    }
}

export { CreateCategoryService }