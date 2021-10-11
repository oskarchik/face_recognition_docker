const calculateFaceLocation = async (data) => {
  const regions = await data?.outputs[0].data.regions;
  const imagen = document.getElementById('inputImage');
  const width = Number(imagen?.clientWidth);
  const height = Number(imagen?.clientHeight);
  const boxes = regions.map((region) => {
    return region.region_info.bounding_box;
  });
  const calculatedFaces = boxes.map((box) => {
    return (box = {
      ...box,
      top_row: box.top_row * height,
      left_col: box.left_col * width,
      bottom_row: height - box.bottom_row * height,
      right_col: width - box.right_col * width,
    });
  });

  return calculatedFaces;
};

export default calculateFaceLocation;
