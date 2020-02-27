export class Validators {
   static requires(value = '') {
        return value && value.trim();
    }

    static minLength(length){
        return value => {
            return value.length >= length;
        };
    }
}