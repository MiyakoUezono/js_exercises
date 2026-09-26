export const obj = {
    day_count_if(str){
        if(str === "Jan" || str ==="Mar" || str ==="May" || str ==="Jul" || str ==="Aug" || str ==="Oct" || str ==="Dec"){
            return true
        }
        else{
            return false
        }    
    },
    day_count_switch(str){
        switch(str){
            case "Jan":
                return true;
                break;
            case "Feb":
                return false;
                break;
            case "Mar":
                return true;
                break;
            case "Apr":
                return false;
                break;
            case "May":
                return true;
                break;
            case "Jun":
                return false;
                break;
            case "Jul":
                return true;
                break;
            case "Aug":
                return true;
                break;
            case "Sep":
                return false;
                break;
            case "Oct":
                return true;
                break;
            case "Nov":
                return false;
                break;
            case "Dec":
                return true;
                break;
            default:
                return false;
                break;
        }
    }

}

