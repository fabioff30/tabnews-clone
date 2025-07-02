function status(request, response) {
  response.status(200).json({ teste: "é feito com sucesso" });
}

export default status;
