export type Data = 
  | { type: "error", content: string }
  | { type: "success", content: string }

const result: Data = {
  type: "error", content: "error message"
}
type Result =
  | { type: 'ok'; data: Data }
  | { type: 'error'; error: Error };

const match = (arg: Data) => ({
  with: (result: Result, fn: (args?: any) => any) => {
    return arg.type === result.type ? fn : this;
  }
})