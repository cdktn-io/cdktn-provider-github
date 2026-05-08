# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktn/provider-github.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktn/provider-github.branchProtection.BranchProtection"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection github_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.branchProtection.BranchProtection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtection(Construct Scope, string Id, BranchProtectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.branchProtection.BranchProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews">PutRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks">PutRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.putRestrictPushes">PutRestrictPushes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetAllowsDeletions">ResetAllowsDeletions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetAllowsForcePushes">ResetAllowsForcePushes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetEnforceAdmins">ResetEnforceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetForcePushBypassers">ResetForcePushBypassers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetLockBranch">ResetLockBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetRequireConversationResolution">ResetRequireConversationResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetRequiredLinearHistory">ResetRequiredLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetRequiredPullRequestReviews">ResetRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetRequiredStatusChecks">ResetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetRequireSignedCommits">ResetRequireSignedCommits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.resetRestrictPushes">ResetRestrictPushes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.branchProtection.BranchProtection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.branchProtection.BranchProtection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.branchProtection.BranchProtection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.branchProtection.BranchProtection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.branchProtection.BranchProtection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.branchProtection.BranchProtection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.branchProtection.BranchProtection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.branchProtection.BranchProtection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.branchProtection.BranchProtection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.branchProtection.BranchProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.branchProtection.BranchProtection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.branchProtection.BranchProtection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.branchProtection.BranchProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.branchProtection.BranchProtection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.branchProtection.BranchProtection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.branchProtection.BranchProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.branchProtection.BranchProtection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.branchProtection.BranchProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.branchProtection.BranchProtection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.branchProtection.BranchProtection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.branchProtection.BranchProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRequiredPullRequestReviews` <a name="PutRequiredPullRequestReviews" id="@cdktn/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews"></a>

```csharp
private void PutRequiredPullRequestReviews(IResolvable|BranchProtectionRequiredPullRequestReviews[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>[]

---

##### `PutRequiredStatusChecks` <a name="PutRequiredStatusChecks" id="@cdktn/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks"></a>

```csharp
private void PutRequiredStatusChecks(IResolvable|BranchProtectionRequiredStatusChecks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>[]

---

##### `PutRestrictPushes` <a name="PutRestrictPushes" id="@cdktn/provider-github.branchProtection.BranchProtection.putRestrictPushes"></a>

```csharp
private void PutRestrictPushes(IResolvable|BranchProtectionRestrictPushes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.branchProtection.BranchProtection.putRestrictPushes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes">BranchProtectionRestrictPushes</a>[]

---

##### `ResetAllowsDeletions` <a name="ResetAllowsDeletions" id="@cdktn/provider-github.branchProtection.BranchProtection.resetAllowsDeletions"></a>

```csharp
private void ResetAllowsDeletions()
```

##### `ResetAllowsForcePushes` <a name="ResetAllowsForcePushes" id="@cdktn/provider-github.branchProtection.BranchProtection.resetAllowsForcePushes"></a>

```csharp
private void ResetAllowsForcePushes()
```

##### `ResetEnforceAdmins` <a name="ResetEnforceAdmins" id="@cdktn/provider-github.branchProtection.BranchProtection.resetEnforceAdmins"></a>

```csharp
private void ResetEnforceAdmins()
```

##### `ResetForcePushBypassers` <a name="ResetForcePushBypassers" id="@cdktn/provider-github.branchProtection.BranchProtection.resetForcePushBypassers"></a>

```csharp
private void ResetForcePushBypassers()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.branchProtection.BranchProtection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLockBranch` <a name="ResetLockBranch" id="@cdktn/provider-github.branchProtection.BranchProtection.resetLockBranch"></a>

```csharp
private void ResetLockBranch()
```

##### `ResetRequireConversationResolution` <a name="ResetRequireConversationResolution" id="@cdktn/provider-github.branchProtection.BranchProtection.resetRequireConversationResolution"></a>

```csharp
private void ResetRequireConversationResolution()
```

##### `ResetRequiredLinearHistory` <a name="ResetRequiredLinearHistory" id="@cdktn/provider-github.branchProtection.BranchProtection.resetRequiredLinearHistory"></a>

```csharp
private void ResetRequiredLinearHistory()
```

##### `ResetRequiredPullRequestReviews` <a name="ResetRequiredPullRequestReviews" id="@cdktn/provider-github.branchProtection.BranchProtection.resetRequiredPullRequestReviews"></a>

```csharp
private void ResetRequiredPullRequestReviews()
```

##### `ResetRequiredStatusChecks` <a name="ResetRequiredStatusChecks" id="@cdktn/provider-github.branchProtection.BranchProtection.resetRequiredStatusChecks"></a>

```csharp
private void ResetRequiredStatusChecks()
```

##### `ResetRequireSignedCommits` <a name="ResetRequireSignedCommits" id="@cdktn/provider-github.branchProtection.BranchProtection.resetRequireSignedCommits"></a>

```csharp
private void ResetRequireSignedCommits()
```

##### `ResetRestrictPushes` <a name="ResetRestrictPushes" id="@cdktn/provider-github.branchProtection.BranchProtection.resetRestrictPushes"></a>

```csharp
private void ResetRestrictPushes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BranchProtection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.branchProtection.BranchProtection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

BranchProtection.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.branchProtection.BranchProtection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.branchProtection.BranchProtection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

BranchProtection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.branchProtection.BranchProtection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

BranchProtection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.branchProtection.BranchProtection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

BranchProtection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BranchProtection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.branchProtection.BranchProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.branchProtection.BranchProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BranchProtection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.branchProtection.BranchProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BranchProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.branchProtection.BranchProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BranchProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.restrictPushes">RestrictPushes</a></code> | <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList">BranchProtectionRestrictPushesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput">AllowsDeletionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput">AllowsForcePushesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput">EnforceAdminsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.forcePushBypassersInput">ForcePushBypassersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.lockBranchInput">LockBranchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput">RequireConversationResolutionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput">RequiredLinearHistoryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput">RequiredPullRequestReviewsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput">RequiredStatusChecksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput">RequireSignedCommitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.restrictPushesInput">RestrictPushesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes">BranchProtectionRestrictPushes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.allowsDeletions">AllowsDeletions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.allowsForcePushes">AllowsForcePushes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.enforceAdmins">EnforceAdmins</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.forcePushBypassers">ForcePushBypassers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.lockBranch">LockBranch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.branchProtection.BranchProtection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.branchProtection.BranchProtection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.branchProtection.BranchProtection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.branchProtection.BranchProtection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.branchProtection.BranchProtection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.branchProtection.BranchProtection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.branchProtection.BranchProtection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.branchProtection.BranchProtection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.branchProtection.BranchProtection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.branchProtection.BranchProtection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.branchProtection.BranchProtection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RequiredPullRequestReviews`<sup>Required</sup> <a name="RequiredPullRequestReviews" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews"></a>

```csharp
public BranchProtectionRequiredPullRequestReviewsList RequiredPullRequestReviews { get; }
```

- *Type:* <a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a>

---

##### `RequiredStatusChecks`<sup>Required</sup> <a name="RequiredStatusChecks" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks"></a>

```csharp
public BranchProtectionRequiredStatusChecksList RequiredStatusChecks { get; }
```

- *Type:* <a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a>

---

##### `RestrictPushes`<sup>Required</sup> <a name="RestrictPushes" id="@cdktn/provider-github.branchProtection.BranchProtection.property.restrictPushes"></a>

```csharp
public BranchProtectionRestrictPushesList RestrictPushes { get; }
```

- *Type:* <a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList">BranchProtectionRestrictPushesList</a>

---

##### `AllowsDeletionsInput`<sup>Optional</sup> <a name="AllowsDeletionsInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput"></a>

```csharp
public bool|IResolvable AllowsDeletionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowsForcePushesInput`<sup>Optional</sup> <a name="AllowsForcePushesInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput"></a>

```csharp
public bool|IResolvable AllowsForcePushesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnforceAdminsInput`<sup>Optional</sup> <a name="EnforceAdminsInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput"></a>

```csharp
public bool|IResolvable EnforceAdminsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForcePushBypassersInput`<sup>Optional</sup> <a name="ForcePushBypassersInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.forcePushBypassersInput"></a>

```csharp
public string[] ForcePushBypassersInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LockBranchInput`<sup>Optional</sup> <a name="LockBranchInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.lockBranchInput"></a>

```csharp
public bool|IResolvable LockBranchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `RequireConversationResolutionInput`<sup>Optional</sup> <a name="RequireConversationResolutionInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput"></a>

```csharp
public bool|IResolvable RequireConversationResolutionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiredLinearHistoryInput`<sup>Optional</sup> <a name="RequiredLinearHistoryInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput"></a>

```csharp
public bool|IResolvable RequiredLinearHistoryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiredPullRequestReviewsInput`<sup>Optional</sup> <a name="RequiredPullRequestReviewsInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput"></a>

```csharp
public IResolvable|BranchProtectionRequiredPullRequestReviews[] RequiredPullRequestReviewsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>[]

---

##### `RequiredStatusChecksInput`<sup>Optional</sup> <a name="RequiredStatusChecksInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput"></a>

```csharp
public IResolvable|BranchProtectionRequiredStatusChecks[] RequiredStatusChecksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>[]

---

##### `RequireSignedCommitsInput`<sup>Optional</sup> <a name="RequireSignedCommitsInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput"></a>

```csharp
public bool|IResolvable RequireSignedCommitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RestrictPushesInput`<sup>Optional</sup> <a name="RestrictPushesInput" id="@cdktn/provider-github.branchProtection.BranchProtection.property.restrictPushesInput"></a>

```csharp
public IResolvable|BranchProtectionRestrictPushes[] RestrictPushesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes">BranchProtectionRestrictPushes</a>[]

---

##### `AllowsDeletions`<sup>Required</sup> <a name="AllowsDeletions" id="@cdktn/provider-github.branchProtection.BranchProtection.property.allowsDeletions"></a>

```csharp
public bool|IResolvable AllowsDeletions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowsForcePushes`<sup>Required</sup> <a name="AllowsForcePushes" id="@cdktn/provider-github.branchProtection.BranchProtection.property.allowsForcePushes"></a>

```csharp
public bool|IResolvable AllowsForcePushes { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnforceAdmins`<sup>Required</sup> <a name="EnforceAdmins" id="@cdktn/provider-github.branchProtection.BranchProtection.property.enforceAdmins"></a>

```csharp
public bool|IResolvable EnforceAdmins { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForcePushBypassers`<sup>Required</sup> <a name="ForcePushBypassers" id="@cdktn/provider-github.branchProtection.BranchProtection.property.forcePushBypassers"></a>

```csharp
public string[] ForcePushBypassers { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.branchProtection.BranchProtection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LockBranch`<sup>Required</sup> <a name="LockBranch" id="@cdktn/provider-github.branchProtection.BranchProtection.property.lockBranch"></a>

```csharp
public bool|IResolvable LockBranch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-github.branchProtection.BranchProtection.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-github.branchProtection.BranchProtection.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `RequireConversationResolution`<sup>Required</sup> <a name="RequireConversationResolution" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requireConversationResolution"></a>

```csharp
public bool|IResolvable RequireConversationResolution { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiredLinearHistory`<sup>Required</sup> <a name="RequiredLinearHistory" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory"></a>

```csharp
public bool|IResolvable RequiredLinearHistory { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireSignedCommits`<sup>Required</sup> <a name="RequireSignedCommits" id="@cdktn/provider-github.branchProtection.BranchProtection.property.requireSignedCommits"></a>

```csharp
public bool|IResolvable RequireSignedCommits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.branchProtection.BranchProtection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Pattern,
    string RepositoryId,
    bool|IResolvable AllowsDeletions = null,
    bool|IResolvable AllowsForcePushes = null,
    bool|IResolvable EnforceAdmins = null,
    string[] ForcePushBypassers = null,
    string Id = null,
    bool|IResolvable LockBranch = null,
    bool|IResolvable RequireConversationResolution = null,
    bool|IResolvable RequiredLinearHistory = null,
    IResolvable|BranchProtectionRequiredPullRequestReviews[] RequiredPullRequestReviews = null,
    IResolvable|BranchProtectionRequiredStatusChecks[] RequiredStatusChecks = null,
    bool|IResolvable RequireSignedCommits = null,
    IResolvable|BranchProtectionRestrictPushes[] RestrictPushes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.pattern">Pattern</a></code> | <code>string</code> | Identifies the protection rule pattern. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | The name or node ID of the repository associated with this branch protection rule. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions">AllowsDeletions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting this to 'true' to allow the branch to be deleted. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes">AllowsForcePushes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting this to 'true' to allow force pushes on the branch. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins">EnforceAdmins</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.forcePushBypassers">ForcePushBypassers</a></code> | <code>string[]</code> | The list of actor Names/IDs that are allowed to bypass force push restrictions. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#id BranchProtection#id}. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch">LockBranch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting this to 'true' will make the branch read-only and preventing any pushes to it. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>[]</code> | required_pull_request_reviews block. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>[]</code> | required_status_checks block. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting this to 'true' requires all commits to be signed with GPG. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.restrictPushes">RestrictPushes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes">BranchProtectionRestrictPushes</a>[]</code> | restrict_pushes block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Identifies the protection rule pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#pattern BranchProtection#pattern}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

The name or node ID of the repository associated with this branch protection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#repository_id BranchProtection#repository_id}

---

##### `AllowsDeletions`<sup>Optional</sup> <a name="AllowsDeletions" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions"></a>

```csharp
public bool|IResolvable AllowsDeletions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting this to 'true' to allow the branch to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#allows_deletions BranchProtection#allows_deletions}

---

##### `AllowsForcePushes`<sup>Optional</sup> <a name="AllowsForcePushes" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes"></a>

```csharp
public bool|IResolvable AllowsForcePushes { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting this to 'true' to allow force pushes on the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}

---

##### `EnforceAdmins`<sup>Optional</sup> <a name="EnforceAdmins" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins"></a>

```csharp
public bool|IResolvable EnforceAdmins { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#enforce_admins BranchProtection#enforce_admins}

---

##### `ForcePushBypassers`<sup>Optional</sup> <a name="ForcePushBypassers" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.forcePushBypassers"></a>

```csharp
public string[] ForcePushBypassers { get; set; }
```

- *Type:* string[]

The list of actor Names/IDs that are allowed to bypass force push restrictions.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#force_push_bypassers BranchProtection#force_push_bypassers}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#id BranchProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LockBranch`<sup>Optional</sup> <a name="LockBranch" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch"></a>

```csharp
public bool|IResolvable LockBranch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting this to 'true' will make the branch read-only and preventing any pushes to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#lock_branch BranchProtection#lock_branch}

---

##### `RequireConversationResolution`<sup>Optional</sup> <a name="RequireConversationResolution" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution"></a>

```csharp
public bool|IResolvable RequireConversationResolution { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}

---

##### `RequiredLinearHistory`<sup>Optional</sup> <a name="RequiredLinearHistory" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory"></a>

```csharp
public bool|IResolvable RequiredLinearHistory { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#required_linear_history BranchProtection#required_linear_history}

---

##### `RequiredPullRequestReviews`<sup>Optional</sup> <a name="RequiredPullRequestReviews" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews"></a>

```csharp
public IResolvable|BranchProtectionRequiredPullRequestReviews[] RequiredPullRequestReviews { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>[]

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}

---

##### `RequiredStatusChecks`<sup>Optional</sup> <a name="RequiredStatusChecks" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks"></a>

```csharp
public IResolvable|BranchProtectionRequiredStatusChecks[] RequiredStatusChecks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>[]

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#required_status_checks BranchProtection#required_status_checks}

---

##### `RequireSignedCommits`<sup>Optional</sup> <a name="RequireSignedCommits" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits"></a>

```csharp
public bool|IResolvable RequireSignedCommits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#require_signed_commits BranchProtection#require_signed_commits}

---

##### `RestrictPushes`<sup>Optional</sup> <a name="RestrictPushes" id="@cdktn/provider-github.branchProtection.BranchProtectionConfig.property.restrictPushes"></a>

```csharp
public IResolvable|BranchProtectionRestrictPushes[] RestrictPushes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes">BranchProtectionRestrictPushes</a>[]

restrict_pushes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#restrict_pushes BranchProtection#restrict_pushes}

---

### BranchProtectionRequiredPullRequestReviews <a name="BranchProtectionRequiredPullRequestReviews" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionRequiredPullRequestReviews {
    string[] DismissalRestrictions = null,
    bool|IResolvable DismissStaleReviews = null,
    string[] PullRequestBypassers = null,
    bool|IResolvable RequireCodeOwnerReviews = null,
    double RequiredApprovingReviewCount = null,
    bool|IResolvable RequireLastPushApproval = null,
    bool|IResolvable RestrictDismissals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions">DismissalRestrictions</a></code> | <code>string[]</code> | The list of actor Names/IDs with dismissal access. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers">PullRequestBypassers</a></code> | <code>string[]</code> | The list of actor Names/IDs that are allowed to bypass pull request requirements. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | Require 'x' number of approvals to satisfy branch protection requirements. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Require that The most recent push must be approved by someone other than the last pusher. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals">RestrictDismissals</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Restrict pull request review dismissals. |

---

##### `DismissalRestrictions`<sup>Optional</sup> <a name="DismissalRestrictions" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions"></a>

```csharp
public string[] DismissalRestrictions { get; set; }
```

- *Type:* string[]

The list of actor Names/IDs with dismissal access.

If not empty, 'restrict_dismissals' is ignored. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#dismissal_restrictions BranchProtection#dismissal_restrictions}

---

##### `DismissStaleReviews`<sup>Optional</sup> <a name="DismissStaleReviews" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews"></a>

```csharp
public bool|IResolvable DismissStaleReviews { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}

---

##### `PullRequestBypassers`<sup>Optional</sup> <a name="PullRequestBypassers" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers"></a>

```csharp
public string[] PullRequestBypassers { get; set; }
```

- *Type:* string[]

The list of actor Names/IDs that are allowed to bypass pull request requirements.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#pull_request_bypassers BranchProtection#pull_request_bypassers}

---

##### `RequireCodeOwnerReviews`<sup>Optional</sup> <a name="RequireCodeOwnerReviews" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```csharp
public bool|IResolvable RequireCodeOwnerReviews { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#require_code_owner_reviews BranchProtection#require_code_owner_reviews}

---

##### `RequiredApprovingReviewCount`<sup>Optional</sup> <a name="RequiredApprovingReviewCount" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; set; }
```

- *Type:* double

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#required_approving_review_count BranchProtection#required_approving_review_count}

---

##### `RequireLastPushApproval`<sup>Optional</sup> <a name="RequireLastPushApproval" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval"></a>

```csharp
public bool|IResolvable RequireLastPushApproval { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Require that The most recent push must be approved by someone other than the last pusher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#require_last_push_approval BranchProtection#require_last_push_approval}

---

##### `RestrictDismissals`<sup>Optional</sup> <a name="RestrictDismissals" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals"></a>

```csharp
public bool|IResolvable RestrictDismissals { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Restrict pull request review dismissals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#restrict_dismissals BranchProtection#restrict_dismissals}

---

### BranchProtectionRequiredStatusChecks <a name="BranchProtectionRequiredStatusChecks" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionRequiredStatusChecks {
    string[] Contexts = null,
    bool|IResolvable Strict = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts">Contexts</a></code> | <code>string[]</code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict">Strict</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Require branches to be up to date before merging. |

---

##### `Contexts`<sup>Optional</sup> <a name="Contexts" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts"></a>

```csharp
public string[] Contexts { get; set; }
```

- *Type:* string[]

The list of status checks to require in order to merge into this branch.

No status checks are required by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#contexts BranchProtection#contexts}

---

##### `Strict`<sup>Optional</sup> <a name="Strict" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict"></a>

```csharp
public bool|IResolvable Strict { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#strict BranchProtection#strict}

---

### BranchProtectionRestrictPushes <a name="BranchProtectionRestrictPushes" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionRestrictPushes {
    bool|IResolvable BlocksCreations = null,
    string[] PushAllowances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes.property.blocksCreations">BlocksCreations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Restrict pushes that create matching branches. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes.property.pushAllowances">PushAllowances</a></code> | <code>string[]</code> | The list of actor Names/IDs that may push to the branch. |

---

##### `BlocksCreations`<sup>Optional</sup> <a name="BlocksCreations" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes.property.blocksCreations"></a>

```csharp
public bool|IResolvable BlocksCreations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Restrict pushes that create matching branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#blocks_creations BranchProtection#blocks_creations}

---

##### `PushAllowances`<sup>Optional</sup> <a name="PushAllowances" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes.property.pushAllowances"></a>

```csharp
public string[] PushAllowances { get; set; }
```

- *Type:* string[]

The list of actor Names/IDs that may push to the branch.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/branch_protection#push_allowances BranchProtection#push_allowances}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionRequiredPullRequestReviewsList <a name="BranchProtectionRequiredPullRequestReviewsList" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionRequiredPullRequestReviewsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get"></a>

```csharp
private BranchProtectionRequiredPullRequestReviewsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue"></a>

```csharp
public IResolvable|BranchProtectionRequiredPullRequestReviews[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>[]

---


### BranchProtectionRequiredPullRequestReviewsOutputReference <a name="BranchProtectionRequiredPullRequestReviewsOutputReference" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionRequiredPullRequestReviewsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissalRestrictions">ResetDismissalRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissStaleReviews">ResetDismissStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetPullRequestBypassers">ResetPullRequestBypassers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews">ResetRequireCodeOwnerReviews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount">ResetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval">ResetRequireLastPushApproval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRestrictDismissals">ResetRestrictDismissals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDismissalRestrictions` <a name="ResetDismissalRestrictions" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissalRestrictions"></a>

```csharp
private void ResetDismissalRestrictions()
```

##### `ResetDismissStaleReviews` <a name="ResetDismissStaleReviews" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```csharp
private void ResetDismissStaleReviews()
```

##### `ResetPullRequestBypassers` <a name="ResetPullRequestBypassers" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetPullRequestBypassers"></a>

```csharp
private void ResetPullRequestBypassers()
```

##### `ResetRequireCodeOwnerReviews` <a name="ResetRequireCodeOwnerReviews" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```csharp
private void ResetRequireCodeOwnerReviews()
```

##### `ResetRequiredApprovingReviewCount` <a name="ResetRequiredApprovingReviewCount" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```csharp
private void ResetRequiredApprovingReviewCount()
```

##### `ResetRequireLastPushApproval` <a name="ResetRequireLastPushApproval" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval"></a>

```csharp
private void ResetRequireLastPushApproval()
```

##### `ResetRestrictDismissals` <a name="ResetRestrictDismissals" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRestrictDismissals"></a>

```csharp
private void ResetRestrictDismissals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput">DismissalRestrictionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">DismissStaleReviewsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput">PullRequestBypassersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">RequireCodeOwnerReviewsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">RequiredApprovingReviewCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput">RequireLastPushApprovalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput">RestrictDismissalsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions">DismissalRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers">PullRequestBypassers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals">RestrictDismissals</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DismissalRestrictionsInput`<sup>Optional</sup> <a name="DismissalRestrictionsInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput"></a>

```csharp
public string[] DismissalRestrictionsInput { get; }
```

- *Type:* string[]

---

##### `DismissStaleReviewsInput`<sup>Optional</sup> <a name="DismissStaleReviewsInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```csharp
public bool|IResolvable DismissStaleReviewsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PullRequestBypassersInput`<sup>Optional</sup> <a name="PullRequestBypassersInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput"></a>

```csharp
public string[] PullRequestBypassersInput { get; }
```

- *Type:* string[]

---

##### `RequireCodeOwnerReviewsInput`<sup>Optional</sup> <a name="RequireCodeOwnerReviewsInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```csharp
public bool|IResolvable RequireCodeOwnerReviewsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiredApprovingReviewCountInput`<sup>Optional</sup> <a name="RequiredApprovingReviewCountInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```csharp
public double RequiredApprovingReviewCountInput { get; }
```

- *Type:* double

---

##### `RequireLastPushApprovalInput`<sup>Optional</sup> <a name="RequireLastPushApprovalInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput"></a>

```csharp
public bool|IResolvable RequireLastPushApprovalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RestrictDismissalsInput`<sup>Optional</sup> <a name="RestrictDismissalsInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput"></a>

```csharp
public bool|IResolvable RestrictDismissalsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DismissalRestrictions`<sup>Required</sup> <a name="DismissalRestrictions" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions"></a>

```csharp
public string[] DismissalRestrictions { get; }
```

- *Type:* string[]

---

##### `DismissStaleReviews`<sup>Required</sup> <a name="DismissStaleReviews" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```csharp
public bool|IResolvable DismissStaleReviews { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PullRequestBypassers`<sup>Required</sup> <a name="PullRequestBypassers" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers"></a>

```csharp
public string[] PullRequestBypassers { get; }
```

- *Type:* string[]

---

##### `RequireCodeOwnerReviews`<sup>Required</sup> <a name="RequireCodeOwnerReviews" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```csharp
public bool|IResolvable RequireCodeOwnerReviews { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiredApprovingReviewCount`<sup>Required</sup> <a name="RequiredApprovingReviewCount" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; }
```

- *Type:* double

---

##### `RequireLastPushApproval`<sup>Required</sup> <a name="RequireLastPushApproval" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval"></a>

```csharp
public bool|IResolvable RequireLastPushApproval { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RestrictDismissals`<sup>Required</sup> <a name="RestrictDismissals" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals"></a>

```csharp
public bool|IResolvable RestrictDismissals { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BranchProtectionRequiredPullRequestReviews InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>

---


### BranchProtectionRequiredStatusChecksList <a name="BranchProtectionRequiredStatusChecksList" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionRequiredStatusChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get"></a>

```csharp
private BranchProtectionRequiredStatusChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue"></a>

```csharp
public IResolvable|BranchProtectionRequiredStatusChecks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>[]

---


### BranchProtectionRequiredStatusChecksOutputReference <a name="BranchProtectionRequiredStatusChecksOutputReference" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionRequiredStatusChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetContexts">ResetContexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetStrict">ResetStrict</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContexts` <a name="ResetContexts" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetContexts"></a>

```csharp
private void ResetContexts()
```

##### `ResetStrict` <a name="ResetStrict" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetStrict"></a>

```csharp
private void ResetStrict()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput">ContextsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput">StrictInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts">Contexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict">Strict</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextsInput`<sup>Optional</sup> <a name="ContextsInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput"></a>

```csharp
public string[] ContextsInput { get; }
```

- *Type:* string[]

---

##### `StrictInput`<sup>Optional</sup> <a name="StrictInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput"></a>

```csharp
public bool|IResolvable StrictInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Contexts`<sup>Required</sup> <a name="Contexts" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts"></a>

```csharp
public string[] Contexts { get; }
```

- *Type:* string[]

---

##### `Strict`<sup>Required</sup> <a name="Strict" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict"></a>

```csharp
public bool|IResolvable Strict { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BranchProtectionRequiredStatusChecks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>

---


### BranchProtectionRestrictPushesList <a name="BranchProtectionRestrictPushesList" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionRestrictPushesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.get"></a>

```csharp
private BranchProtectionRestrictPushesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes">BranchProtectionRestrictPushes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesList.property.internalValue"></a>

```csharp
public IResolvable|BranchProtectionRestrictPushes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes">BranchProtectionRestrictPushes</a>[]

---


### BranchProtectionRestrictPushesOutputReference <a name="BranchProtectionRestrictPushesOutputReference" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new BranchProtectionRestrictPushesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.resetBlocksCreations">ResetBlocksCreations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.resetPushAllowances">ResetPushAllowances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlocksCreations` <a name="ResetBlocksCreations" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.resetBlocksCreations"></a>

```csharp
private void ResetBlocksCreations()
```

##### `ResetPushAllowances` <a name="ResetPushAllowances" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.resetPushAllowances"></a>

```csharp
private void ResetPushAllowances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.blocksCreationsInput">BlocksCreationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.pushAllowancesInput">PushAllowancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.blocksCreations">BlocksCreations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.pushAllowances">PushAllowances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes">BranchProtectionRestrictPushes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlocksCreationsInput`<sup>Optional</sup> <a name="BlocksCreationsInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.blocksCreationsInput"></a>

```csharp
public bool|IResolvable BlocksCreationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PushAllowancesInput`<sup>Optional</sup> <a name="PushAllowancesInput" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.pushAllowancesInput"></a>

```csharp
public string[] PushAllowancesInput { get; }
```

- *Type:* string[]

---

##### `BlocksCreations`<sup>Required</sup> <a name="BlocksCreations" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.blocksCreations"></a>

```csharp
public bool|IResolvable BlocksCreations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PushAllowances`<sup>Required</sup> <a name="PushAllowances" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.pushAllowances"></a>

```csharp
public string[] PushAllowances { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BranchProtectionRestrictPushes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.branchProtection.BranchProtectionRestrictPushes">BranchProtectionRestrictPushes</a>

---



