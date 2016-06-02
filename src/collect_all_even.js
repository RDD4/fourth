
function collect_same_elements(collection_a, object_b) {
    var astring = '';
    var result = '';
    for(var i=0;i<collection_a.length;i++)
    {
        astring = astring + collection_a[i].key;
    }
    for(var i=0;i<astring.length;i++)
    {
        for(var j=0;j<object_b.value.length;j++)
        {
            if (astring.charAt(i) === object_b.value[j])
            {
                result += (astring.charAt(i)+ " ");
                break;
            }
        }
    }
   result = result.substring(0,result.length-1);
    var arr = result.split(" ");
    return arr;
}

module.exports = collect_same_elements;
