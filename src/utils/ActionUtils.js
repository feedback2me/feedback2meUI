class Actions {
  constructor(actionName) {
    this.actionName = actionName;
  }

  getActionTypeFor = actionStatus => getActionType(this.actionName, actionStatus);
}

class RequestActions extends Actions {
  constructor(actionName) {
    super(actionName);
  }

  start = payload => ({
    type: getActionType(this.actionName, ActionStatus.start),
    payload
  });

  setInProgress = payload => ({
    type: getActionType(this.actionName, ActionStatus.inProgress),
    payload
  });

  succeed = payload => ({
    type: getActionType(this.actionName, ActionStatus.succeed),
    payload
  });

  failed = payload => ({
    type: getActionType(this.actionName, ActionStatus.failed),
    payload
  });

  done = payload => ({
    type: getActionType(this.actionName, ActionStatus.done),
    payload
  });
}

class CustomActions extends Actions {}

function getActionType(name, status) {
  return name + "-" + status;
}

const ActionStatus = {
  start: "ACTION-START",
  inProgress: "ACTION-IN-PROGRESS",
  succeed: "ACTION-SUCCEED",
  failed: "ACTION-FAILED",
  done: "ACTION-DONE"
};

export { getActionType, ActionStatus, CustomActions, RequestActions };
