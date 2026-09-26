function resize(params) {
  let maxWidth = 600;
  let maxHeight = 480;

  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }

  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }

  console.log({ maxWidth, maxHeight });
}

function resize1(params) {
  let maxWidth = 600;
  let maxHeight = 480;
  maxWidth = (params && params.maxWidth) || maxWidth
  maxHeight = (params && params.maxHeight) || maxHeight
  console.log({ maxWidth, maxHeight });
}

function resize2(params) {
  let maxWidth = 600;
  let maxHeight = 480;
  maxWidth = (params?.maxWidth) ?? maxWidth
  maxHeight = (params?.maxHeight) ?? maxHeight
  console.log({ maxWidth, maxHeight });
}

resize(undefined) //{ maxWidth: 600, maxHeight: 480 }
resize({maxWidth:400,maxHeight:500}) //{ maxWidth: 400, maxHeight: 500 }
resize({maxWidth:null,maxHeight:500}) //{ maxWidth: 600, maxHeight: 500 }

resize1(undefined) //{ maxWidth: 600, maxHeight: 480 }
resize1({maxWidth:400,maxHeight:500}) //{ maxWidth: 400, maxHeight: 500 }
resize({maxWidth:null,maxHeight:500}) //{ maxWidth: 600, maxHeight: 500 }

resize2(undefined) //{ maxWidth: 600, maxHeight: 480 }
resize2({maxWidth:400,maxHeight:500}) //{ maxWidth: 400, maxHeight: 500 }
resize({maxWidth:null,maxHeight:500}) //{ maxWidth: 600, maxHeight: 500 }