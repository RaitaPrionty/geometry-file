// function for input 
function input(inputId){
    const inputfield = document.getElementById(inputId);
    const inputvalueString = inputfield.value;
    const inputFloat = parseFloat(inputvalueString);
    inputfield.value = '';
    return inputFloat;
    
    // if(inputFloat === Number){
    //     return inputFloat;
    // }
    // else{
    //     alert('please give a number');
    // }
}
// triangle
document.getElementById('btn-triangle').addEventListener('click',function(){
    const trialglebase = input('triangle-base');
    const triangleheight = input('triangle-height');
    const triangleArea = 0.5 * trialglebase * triangleheight;
    const triangletotal = document.getElementById('triangle-total');
    triangletotal.value = triangleArea;
})
// triangle convert mt
document.getElementById('triangle-convert').addEventListener('click',function(){
    const triangletotal = document.getElementById('triangle-total') ;
    const triangletotalinput = triangletotal.value;
    const trianglefloat = parseFloat(triangletotalinput);
    const triangletotalmeter = trianglefloat/100;
    triangletotal.value = triangletotalmeter;
    

});
// rectangle
document.getElementById('btn-rectangle ').addEventListener('click',function(){
    const rectagllength = input('rectangle-length');
    const rectanglewidth = input('rectangle-width');
    const rectangleArea = rectagllength * rectanglewidth;
    const rectangletotal = document.getElementById('rectangle-total');
    rectangletotal.value = rectangleArea;
})
// rectangle convert
document.getElementById('rectangle-convert').addEventListener('click',function(){
    const rectangletotal = document.getElementById('rectangle-total'); 
    const rectangletotalstring = rectangletotal.value;
    const rectanglefloat = parseFloat(rectangletotalstring);
    const rectanglemeter = rectanglefloat/100;
    rectangletotal.value = rectanglemeter;
})
// parallel
document.getElementById('btn-parallel').addEventListener('click',function(){
    const parralelbase = input('parallel-base');
    const parallelheight = input('parallel-height');
    const parallelArea = parralelbase * parallelheight;
    const paralleltotal = document.getElementById('parallel-total');
    paralleltotal.value = parallelArea;
})
// parallel convert
document.getElementById('parallel-convert').addEventListener('click',function(){
    const paralleltotal = document.getElementById('parallel-total'); 
    const paralleltotalstring = paralleltotal.value;
    const paralleltotalfloat = parseFloat(paralleltotalstring);
    const parallelmeter = paralleltotalfloat/100;
    paralleltotal.value = parallelmeter;
})
// rombush
document.getElementById('btn-rombush').addEventListener('click',function(){
    const rombushd1 = input('rombush-d1');
    const rombushd2 = input('rombush-d2');
    const rombushArea = 0.5 * rombushd1 * rombushd2;
    const rombushtotal = document.getElementById('rombush-total');
    rombushtotal.value = rombushArea;
})
// rombush convert
document.getElementById('rombush-convert').addEventListener('click',function(){
    const rombushtotal = document.getElementById('rombush-total'); 
    const rombushtotalstring = rombushtotal.value;
    const rombushtotalfloat = parseFloat(rombushtotalstring);
    const rombushmeter = rombushtotalfloat/100;
    rombushtotal.value = rombushmeter;
})
// Pentagon 
document.getElementById('btn-pentagon').addEventListener('click',function(){
    const p = input('pantagon-p');
    const b = input('pentagon-b');
    const pantagonArea = 0.5 * p * b;
    const pantagontotal = document.getElementById('pentagon-total');
    pantagontotal.value = pantagonArea;
})
// Pentagon  convert
document.getElementById('pentagon-convert').addEventListener('click',function(){
    const pantagontotal = document.getElementById('pentagon-total'); 
    const pantagontotalstring = pantagontotal.value;
    const pantagontotalfloat = parseFloat(pantagontotalstring);
    const pantagonmeter = pantagontotalfloat/100;
    pantagontotal.value = pantagonmeter;
})
//  Ellipse 
document.getElementById('btn-ellipes').addEventListener('click',function(){
    const a = input('ellipse-a');
    const b = input('ellipse-b');
    const ellipseArea = 3.1416 * a * b;
    const ellipsetotal = document.getElementById('ellipse-total');
    ellipsetotal.value = ellipseArea;
})
//  Ellipse  convert
document.getElementById('ellipse-convert').addEventListener('click',function(){
    const ellipsetotal = document.getElementById('ellipse-total'); 
    const ellipsetotalstring = ellipsetotal.value;
    const ellipsetotalfloat = parseFloat(ellipsetotalstring);
    const ellipsemeter = ellipsetotalfloat/100;
    ellipsetotal.value = ellipsemeter;
})
