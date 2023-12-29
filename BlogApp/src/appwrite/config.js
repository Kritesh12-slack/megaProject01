import conf from "../conf/conf";
import { Client, Databases , ID, Query, Storage } from "appwrite";

class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.bucket);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug, {
                title,
                content,
                featuredImage,
                status,
                userId
            });
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug ,{
                title,
                content,
                featuredImage,
                status,
            });
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true
        } catch (error) {
            console.log("Error :",error)
            return false
        }
    }

    async getPost(slug){
        try {
             return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
       try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
       } catch (error) {
            throw error
       } 
    }

    // file upload service

    async uploadFile(file){
        try {
            await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)  
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
        } catch (error) {
            throw error
        }
    }

    async getFilePreview(fileId){
        try {
           await this.bucket.getFilePreview(conf.appwriteBucketId, fileId); 
        } catch (error) {
            throw error
        }
    }
}

const service = new Service();

export default service 