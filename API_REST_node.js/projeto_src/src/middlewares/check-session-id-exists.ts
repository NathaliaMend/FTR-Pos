import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessiontId = request.cookies.sessionId

  if (!sessiontId) {
    return reply.status(401).send({
      error: 'Unauthorized.',
    })
  }
}
