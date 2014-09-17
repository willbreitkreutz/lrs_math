module.exports = function(p1, p2, p3, o){

    //get slope of the line of offset
    var dy = p3[1] - p1[1];
    var dx = p3[0] - p1[0];

    var m = -1 * (dx/dy);

    //get y intersept of the line of offset
    var b = p2[1] - (m * p2[0]);

    //using an arbitrary x value, get the y value in order to get a vector
    var xA = 100;
    var yA = m(xA) + b;
    
    //create our vector
    var v = []
    v.push(p2[0]-xA);
    v.push(p2[1]-yA);

    //get the magnitude of the vector
    var magV = sqrt(pow((p2[0]-xA),2)+pow((p2[1]-yA),2));

    //get the unit magnitude of the vector
    var unitMag = [];
    unitMag.push(v[0]/magV);
    unitMag.push(v[1]/magV);

    //calculate our offset point
    var p = [];
    p.push((o*unitMag[0])+p2[0]);
    p.push((o*unitMag[1])+p2[1]);

    return p;
}
