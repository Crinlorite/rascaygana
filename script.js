const scContainer = document.getElementById('js-container');

const sc = new ScratchCard('#js-container', {
  scratchType: ScratchCard.SCRATCH_TYPE.CIRCLE,
  containerWidth: 300,
  containerHeight: 150,
  imageForwardSrc: 'https://i.imgur.com/8d4IRBe.png', // Imagen gris para rascar
  htmlBackground: `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:18px;font-weight:bold;color:#000;">
                    ¿Quieres ser el padrino de Julieta?
                  </div>`,
  clearZoneRadius: 20,
  nPoints: 30,
  pointSize: 4
});

// iniciar automáticamente
sc.init();
