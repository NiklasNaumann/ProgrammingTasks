let L3 = {
    not : function(a) {
        return typeof a == 'boolean' ? !a : undefined;
    },

    and : function(a, b) {
        if(typeof a == 'boolean' && typeof b == 'boolean') return a == true && b == true ? true : false;
        else if(a == false || b == false) return false;
        else return undefined;
    },

    or : function(a, b) {
        if(typeof a == 'boolean' && typeof b == 'boolean') return a == false && b == false ? false : true;
        else if(a == true || b == true) return true;
        return undefined;
    },

    iff : function(a, b) {
        return this.or(this.not(a),b);
    },

    equals : function(a, b) {
        return this.and(this.iff(a, b), this.iff(b, a));
    }
};