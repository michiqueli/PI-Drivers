
export const sortByNameAsc = (a, b) => {
        if (a.name  < b.name ) {
          return -1;
        }
        if (a.name  > b.name ) {
          return 1;
        }
        return 0;
      }

export const sortByNameDes = (a, b) => {
        if (a.name  > b.name ) {
            return -1;
        }
        if (a.name  < b.name ) {
            return 1;
        }
          return 0;
}

export const sortByDobAsc = (a, b) => {
    if (a.dob < b.dob) {
      return -1;
    }
    if (a.dob > b.dob) {
      return 1;
    }
    return 0;
  }

export const sortByDobDes = (a, b) => {
    if (a.dob > b.dob) {
        return -1;
    }
    if (a.dob < b.dob) {
        return 1;
    }
      return 0;
}
