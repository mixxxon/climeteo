// This is script design to convert date format (bexony ;)

const dateFormate = (date) => {
    const dateString = date.toString();
    
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);

    return (day + "." + month + "." + year);
    // return year;
}

module.exports = dateFormate;