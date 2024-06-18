// Create slideshow object

const photoSlideshow = {
    // Photo array of string names
    photoList : ['forest.jpg','ocean.png','mountain.jpg','hills.png','favicon.ico'],
    // Integer currentPhotoIndex
    currentPhotoIndex : 0,
    // nextPhoto() function
    nextPhoto : function(){
    if(this.currentPhotoIndex == this.photoList.length){
        return this.photoList[this.currentPhotoIndex];
    }
    else if (this.currentPhotoIndex <= this.photoList.length){
        this.currentPhotoIndex++;
        return this.photoList[this.currentPhotoIndex - 1];
    }
    else{
        return "End of slideshow";
    }
},  //Previous photo function
    prevPhoto : function(){
        if ( this.currentPhotoIndex == this.photoList.length){
            this.currentPhotoIndex--;
            return this.photoList[this.currentPhotoIndex];
        }
        else if (this.currentPhotoIndex >= 0){
            this.currentPhotoIndex--;
            return this.photoList[this.currentPhotoIndex];
        }
        else{
            return "End of slideshow";
        }
    }, //Current photo function
    currentPhoto : function(){
        // Check and be sure that the photo we're trying to look at is not undefined
        if(this.photoList[this.currentPhotoIndex] == undefined){
            return "End of slideshow"
        }
        else{
            return this.photoList[this.currentPhotoIndex]
        }
    }
}