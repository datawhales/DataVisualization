let width = 960
let height = 500

let svg = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height)

let g = svg.append('g')
  .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

g.append('line')
  .attr('x1', 0)
  .attr('y1', -height / 2)
  .attr('x2', 0)
  .attr('y2', height / 2)

g.append('line')
  .attr('x1', -width / 2)
  .attr('y1', 0)
  .attr('x2', width / 2)
  .attr('y2', 0)
  .style('stroke', '#DADADA')
  .style('stroke-width', 1)

var cross = {
  draw: function(context, size) {
    context.moveTo(-size / 2, -size / 2)
    context.lineTo(size / 2, size / 2)
    context.moveTo(size / 2, -size / 2)
    context.lineTo(-size / 2, size / 2)
  }
}

var diamond = {
  draw: function(context, size) {
    context.moveTo(0, -size / 2)
    context.lineTo(size / 3, 0)
    context.lineTo(0, size / 2)
    context.lineTo(-size / 3, 0)
    context.lineTo(0, -size / 2)
    context.closePath();
  }
}

let size = 50;

g.append("path")
  .attr("d", d3.symbol().type(cross).size(size))

g.append("path")
  .attr("d", d3.symbol().type(diamond).size(size*1.3))